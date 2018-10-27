import pandas as pd

tax_data = pd.read_csv("dane_podatkowe_inne.csv", sep=";")
tax_data = tax_data[["Unnamed: 0", "opis", "przedmiot", "rok", "data", "miesiąc"]]
tax_data.columns = ["id", "description", "subject", "year", "date", "month"]

for num, i in enumerate(tax_data.date):
    if len(i) > 10:
        tax_data.loc[num, "date"] = "16-05-2018"

#preparing 2018
dict_tax_to_tax_simplified = defaultdict(lambda : "Inne")
dict_tax_to_tax_simplified["CIT"] = "CIT"
dict_tax_to_tax_simplified["VAT"] = "VAT"
dict_tax_to_tax_simplified["PCC"] = "PCC"
dict_tax_to_tax_simplified["PCC"] = "PCC"

data_2018 = pd.read_csv("data/2018_year", index_col=0)
data_2018.columns = ["id", "date", "year", "month", "day", "description", "subject"]
data_2018 = data_2018[["id", "date", "year", "month", "description", "subject"]]

data_2018["subject"] = data_2018["subject"].apply(lambda x : dict_tax_to_tax_simplified[x])
merged_tax_data = pd.concat([tax_data, data_2018], ignore_index=True)
merged_tax_data.to_csv("total_tax_data.csv", sep=";", header=merged_tax_data.columns)
