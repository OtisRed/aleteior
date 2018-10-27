import pandas as pd
import pickle
import numpy as np

from collections import defaultdict

from sklearn.feature_extraction.text import TfidfVectorizer
from .stopwords_polish_application import stop_words_polish, patterns_to_be_removed

class RulingsTokenizerBackend:

    def __init__(self, data):
        self.dane_podatkowe = data

    def get_most_popular_100(self, document, features):
        document_to_array = document[0].toarray()[0]
        _100_items = np.argsort(document_to_array)[::-1][:100]
        top_feats = [(features[i], document_to_array[i]) for i in _100_items]
        return top_feats


    @staticmethod
    def load_data(filename):
        with open(filename, "rb") as f:
            data = pickle.load(f)
        return data


    def classify_text_or_ruling_by_id_and_tax(self, data, year, tax):
        tax_data_locally = self.dane_podatkowe[(self.dane_podatkowe["year"] == year) \
                                          & (self.dane_podatkowe["subject"] == tax)]
        tax_data_before_tokenization = []
        for i in tax_data_locally.index:
            for ruling in data:
                if i == ruling[0]:
                    ruling_to_be_added = ruling[1]
                    for pattern in patterns_to_be_removed:
                        ruling_to_be_added = ruling_to_be_added.replace(pattern, " ")
                    tax_data_before_tokenization.append(ruling_to_be_added.replace("\n", " "))
                    break
        return tax_data_before_tokenization


    def vectorize_and_count_100_most_important(self, filename, year, tax, filename_to_save, filename_to_save_csv):
        data = RulingsTokenizerBackend.load_data(filename)
        count = TfidfVectorizer(max_df=1.0, stop_words=stop_words_polish,
                                max_features=15000)
        X = count.fit_transform(self.classify_text_or_ruling_by_id_and_tax(data, year, tax))
        features = count.get_feature_names()
        scores_of_words = [(self.get_most_popular_100(i, features)) for i in X]
        word_occurences = defaultdict(lambda: 0)  # word : no of occurences
        for document in scores_of_words:
            for word in document:
                word_occurences[word[0]] += 1

        with open(filename_to_save, "wb") as f:
            pickle.dump(dict(word_occurences), f)

        self.convert_to_pandas_dict(filename_to_save_csv, year, word_occurences)
        return word_occurences

    def convert_to_pandas_dict(self, filename, year, data=dict()):
        keys = list(data.keys())
        data_p = pd.DataFrame.from_dict({"Word": keys, year: [data[key] for key in keys]})
        data_p = data_p.set_index("Word")
        data_p.to_csv(filename, sep=";")
