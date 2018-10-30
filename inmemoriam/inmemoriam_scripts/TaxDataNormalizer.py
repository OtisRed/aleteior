import pandas as pd
from .utilities import colorize


class TaxDataNormalizer():

    def __init__(self, data, words_list_greater_score, label_one, label_two):
        self.data = data
        self.words_list_greater_score = words_list_greater_score
        self.label_one = label_one
        self.label_two = label_two
        self.normalized_data = self.normalize()

    def normalize(self):
        normalized_data_for_greater_score = \
            self.data[self.data.index.isin(self.words_list_greater_score)]

        normalized_data_for_greater_score[self.label_one] = \
            (normalized_data_for_greater_score[self.label_one]
                (self.data[self.data[self.label_one] != 0.0]
                    [self.label_one].count()))
        normalized_data_for_greater_score[self.label_two] = \
            (
                 normalized_data_for_greater_score[self.label_two] /
                 (
                     self.data[
                        self.data[self.label_two] != 0.0
                     ][self.label_two].count()
                     ][self.label_two].count()
                 )
            )

        normalized_data_for_greater_score["zmiana \"charakterystyczności\" "
                                          "danego słowa [w %]"]\
            = (
                   normalized_data_for_greater_score.pct_change(axis=1)
                   [self.label_one] * 100
              )
        return normalized_data_for_greater_score
