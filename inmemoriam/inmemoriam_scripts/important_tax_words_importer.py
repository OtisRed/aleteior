import pickle

class ImportantTaxWordsImporter():

    def __init__(self, filename):
        with open(filename, "rb") as f:
            self.category_for_one_year, self.category_for_second_year = pickle.load(f)
        self.words_lower_fscore = [word for list_of_words in self.category_for_one_year.values() for word in
                                   list_of_words]

        self.words_greater_fscore = [word for list_of_words in self.category_for_second_year.values() for word in
                                     list_of_words]
