import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sqlite3
import os
import pickle
import numpy as np

from collections import defaultdict
from .tax_in_scatterplot import TaxDataInScatterPlot
from .important_tax_words_importer import ImportantTaxWordsImporter
from .rulings_tokenizer import RulingsTokenizerBackend
from .utilities import colorize
from .TaxDataNormalizer import TaxDataNormalizer

tax_data = pd.read_csv("data/total_tax_data.csv", sep=";")

pd.set_option('display.max_rows', None)

def tax_across_years():
    fig, ax = plt.subplots(figsize=(20, 10))
    ax = sns.countplot(x="year", hue="subject", data=tax_data)
    ax.legend(fontsize=20)
    ax.set_title(" Zmiany liczby wydawanych interpretacji"
                 " na przestrzeni lat 2007-2018 ", fontsize=20)
    plt.show()
    plt.tight_layout()

def show_changes_across_years():
    dt = tax_data.groupby(["subject", "year"]).size()
    dt = dt.unstack(level=1).reset_index()
    return (dt.set_index("subject").pct_change(axis=1)*100) \
          .drop([2007, 2008, 2018], axis=1).round(2).reindex(
                  labels=["VAT", "PIT", "CIT", "PCC", "Inne"])

def RulingsTokenizer():
    return RulingsTokenizerBackend(tax_data)

def read_tax_data_vectorizer_results(first_file, second_file, third_file, years = []):
    first_source = pd.read_csv(first_file, sep=";").set_index("Word")
    second_source = pd.read_csv(second_file, sep=";").set_index("Word")
    third_source = pd.read_csv(third_file, sep=";").set_index("Word")

    data_keys = set(first_source.index).union(set(second_source.index)).union(set(third_source.index))

    def allocate_word_occurence_to_year(data, word):
        try:
            w = data.loc[word].get_value(label=0)
            return data_years_dict[word].append(w)
        except:
            return data_years_dict[word].append(0.0)

    data_years_dict = defaultdict(list)

    for word in data_keys:
        allocate_word_occurence_to_year(first_source, word)
        allocate_word_occurence_to_year(second_source, word)
        allocate_word_occurence_to_year(third_source, word)

    data = pd.DataFrame.from_dict(data_years_dict, orient="index")
    data.columns = years
    return data

def select_two_years_for_comparison(year_one, year_second, data_to_plot):
    data_to_plot_from_two_years = data_to_plot[[year_one, year_second]]
    indices_to_remove = data_to_plot_from_two_years[(data_to_plot_from_two_years[year_one] == 0.0)
                                               & (data_to_plot_from_two_years[year_second] == 0.0)].index
    return data_to_plot_from_two_years.drop(indices_to_remove, axis=0)

def present_monthly_data(tax, title):
    tax_data_2016 = tax_data[(tax_data["year"] == 2016) & (tax_data["subject"].isin([tax]))]
    tax_data_2015 = tax_data[(tax_data["year"] == 2015) & (tax_data["subject"].isin([tax]))]
    tax_data_2014 = tax_data[(tax_data["year"] == 2014) & (tax_data["subject"].isin([tax]))]
    tax_data_2016_2015_2014_monthly = pd.concat([tax_data_2014, tax_data_2015, tax_data_2016])
    fig, ax = plt.subplots(figsize=(20, 10))
    ax = sns.countplot(x="month", hue="year", data=tax_data_2016_2015_2014_monthly)
    ax.set_title(title)
    plt.show()

TaxDataInScatterPlot = TaxDataInScatterPlot
ImportantTaxWordsImporter = ImportantTaxWordsImporter
TaxDataNormalizer = TaxDataNormalizer
colorize = colorize

# data_2015 = inmemoriam_scripts.RulingsTokenizer().vectorize_and_count_100_most_important("data_2015", 2015, "PIT", "data_2015_temp", "data_2015_temp.csv")
# data_2016 = inmemoriam_scripts.RulingsTokenizer().vectorize_and_count_100_most_important("data_2016", 2016, "PIT", "data_2016_temp", "data_2016_temp.csv")
# data_2017 = inmemoriam_scripts.RulingsTokenizer().vectorize_and_count_100_most_important("data/data_2017.pkl", 2017, "PIT", "data_2017_temp", "data_2017_temp.csv")

# data_2015 = inmemoriam_scripts.RulingsTokenizer().vectorize_and_count_100_most_important("data_2015", 2015, "CIT", "data_2015_temp_CIT", "data_2015_CIT.csv")
# data_2016 = inmemoriam_scripts.RulingsTokenizer().vectorize_and_count_100_most_important("data_2016", 2016, "CIT", "data_2016_temp_CIT", "data_2016_CIT.csv")
# data_2017 = inmemoriam_scripts.RulingsTokenizer().vectorize_and_count_100_most_important("data/data_2017.pkl", 2017, "CIT", "data_2017_temp_CIT", "data_2017_CIT.csv")