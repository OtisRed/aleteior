import scattertext as st
import pandas as pd
import warnings

from selenium import webdriver as wb
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
from os import getcwd
from IPython.display import display_html

warnings.simplefilter(action='ignore', category=FutureWarning)

class TaxDataInScatterPlot():

    def __init__(self, data):
        self.data = data
        self.term_cat_freq = st.TermCategoryFrequencies(self.data)

    def get_frequencies(self):
        return self.term_cat_freq

    def create_html_with_two_categories(self, category_one, category_two, name_of_file):
        html = st.produce_scattertext_explorer(
            self.term_cat_freq,
            category=category_one,
            category_name=category_one,
            not_category_name=category_two
        )
        open(name_of_file, 'wb').write(html.encode('utf-8'))
        self.name_of_file = name_of_file

    def take_screenshoot(self, image_to_file):
        options = Options()
        options.add_argument('-headless')
        driver = wb.Firefox(firefox_options=options)
        driver.get('file:///{}'.format(getcwd() + "/" + self.name_of_file))
        screenshot = driver.save_screenshot(image_to_file)
        driver.quit()

    def present_fscores(self, category_one, category_two):

        self.fscores = st.termscoring.ScaledFScore.get_scores(self.data[category_one], self.data[category_two])
        self.data_fscores = pd.DataFrame.from_dict({"word": self.data.index,
                                                         "fscore": self.fscores}).set_index("word")
        self.words_greater_fscore = self.data_fscores[self.data_fscores["fscore"] > 0.9] \
            .sort_values(by="fscore", ascending=False)
        self.words_lower_fscore = self.data_fscores[self.data_fscores["fscore"] < 0.1] \
            .sort_values(by="fscore", ascending=True)

        self.words_greater_fscore.index.name = "Najbardziej charakterystyczne słowa dla {} r.".format(category_one)
        self.words_lower_fscore.index.name = "Najbardziej charakterystyczne słowa dla {} r.".format(category_two)

        df1_styler = self.words_greater_fscore.style.set_properties(**{'text-align':'center'})\
                                 .set_table_attributes("style='display:inline-block;float:left;'").set_table_styles(
    [dict(selector="th", props=[("text-align", "center")])]
)
        df2_styler = self.words_lower_fscore.style.set_properties(**{'text-align':'center'})\
                                 .set_table_attributes("style='display:inline-block;float:left;'").set_table_styles(
    [dict(selector="th", props=[("text-align", "center")])]
)
        """https://stackoverflow.com/a/50899244/6799297"""

        display_html(df1_styler._repr_html_() + df2_styler._repr_html_(), raw=True)