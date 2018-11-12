import pandas as pd
from .utilities import colorize


class TaxDataNormalizer():

    def __init__(self, data, words_list_greater_score, label_one, label_two):
        self.data = data
        self.words_list_greater_score = words_list_greater_score
        self.label_one = label_one
        self.label_two = label_two
        self.new_label = "zmiana \"charakterystyczności\" danego słowa [w %]"
        self.normalized_data = self.normalize()

    def normalize(self):
        is_data_in_greater_score = \
            self.data.index.isin(self.words_list_greater_score)
        greater_score_normalized = self.data[is_data_in_greater_score]

        self._normalize_label(self.label_one, greater_score_normalized)
        self._normalize_label(self.label_two, greater_score_normalized)

        pct_changes = greater_score_normalized.pct_change(axis=1)
        normalized_to_first_label = pct_changes[self.label_one] * 100
        greater_score_normalized[self.new_label] = normalized_to_first_label

        return greater_score_normalized

    def _normalize_label(self, label, greater_score_normalized):
        nonzeros_data = self.data[label] != 0.0
        count_non_zeros = self.data[nonzeros_data][label].count()
        non_zeros = greater_score_normalized[
                        label] / count_non_zeros
        greater_score_normalized[label] = non_zeros

