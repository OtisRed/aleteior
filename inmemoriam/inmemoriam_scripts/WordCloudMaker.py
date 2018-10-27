from inmemoriam_scripts import WordCloudMaker

import numpy as np
import matplotlib.pyplot as plt
from PIL import Image
from wordcloud import WordCloud

class WordCloudMaker():

    def __init__(self, data, filename, to_file):
        self.makeImage(data, filename, to_file)

    def transform_format(self, val):
        if val == 0:
            return 255
        else:
            return val

    def makeImage(self, text, image, to_file):
        alice_mask = np.array(Image.open(image))
        transformed_wine_mask = np.ndarray((alice_mask.shape), np.int32)
        for i in range(len(alice_mask)):
            for j in range(len(alice_mask[i])):
                transformed_wine_mask[i][j] = list(map(self.transform_format, alice_mask[i][j]))

        wc = WordCloud(background_color="black", max_words=9000, width=10000, height=8000,
                       mask=np.array(transformed_wine_mask))
        wc.generate_from_frequencies(text)

        plt.figure(figsize=(20, 10), facecolor='k')
        plt.imshow(wc)
        plt.axis("off")
        plt.tight_layout(pad=0)
        plt.savefig(to_file, bbox_inches='tight')
        plt.show()

