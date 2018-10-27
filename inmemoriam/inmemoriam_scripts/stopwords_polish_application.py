from stop_words import get_stop_words

stop_words_polish = "a, aby, ach, acz, aczkolwiek, aj, albo, ale, ależ, ani, aż, bardziej, bardzo, bo, bowiem, by, byli, bynajmniej, być, był, była, było, były, będzie, będą, cali, cała, cały, ci, cię, ciebie, co, cokolwiek, coś, czasami, czasem, czemu, czy, czyli, daleko, dla, dlaczego, dlatego, do, dobrze, dokąd, dość, dużo, dwa, dwaj, dwie, dwoje, dziś, dzisiaj, gdy, gdyby, gdyż, gdzie, gdziekolwiek, gdzieś, i, ich, ile, im, inna, inne, inny, innych, iż, ja, ją, jak, jaka, jakaś, jakby, jaki, jakichś, jakie, jakiś, jakiż, jakkolwiek, jako, jakoś, je, jeden, jedna, jedno, jednak, jednakże, jego, jej, jemu, jest, jestem, jeszcze, jeśli, jeżeli, już, ją, każdy, kiedy, kilka, kimś, kto, ktokolwiek, ktoś, która, które, którego, której, który, których, którym, którzy, ku, lat, lecz, lub, ma, mają, mało, mam, mi, mimo, między, mną, mnie, mogą, moi, moim, moja, moje, może, możliwe, można, mój, mu, musi, my, na, nad, nam, nami, nas, nasi, nasz, nasza, nasze, naszego, naszych, natomiast, natychmiast, nawet, nią, nic, nich, nie, niech, niego, niej, niemu, nigdy, nim, nimi, niż, no, o, obok, od, około, on, ona, one, oni, ono, oraz, oto, owszem, pan, pana, pani, po, pod, podczas, pomimo, ponad, ponieważ, powinien, powinna, powinni, powinno, poza, prawie, przecież, przed, przede, przedtem, przez, przy, roku, również, sama, są, się, skąd, sobie, sobą, sposób, swoje, ta, tak, taka, taki, takie, także, tam, te, tego, tej, temu, ten, teraz, też, to, tobą, tobie, toteż, trzeba, tu, tutaj, twoi, twoim, twoja, twoje, twym, twój, ty, tych, tylko, tym, u, w, wam, wami, was, wasz, wasza, wasze, we, według, wiele, wielu, więc, więcej, wszyscy, wszystkich, wszystkie, wszystkim, wszystko, wtedy, wy, właśnie, z, za, zapewne, zawsze, ze, zł, znowu, znów, został, żaden, żadna, żadne, żadnych, że, żeby"
stop_words_polish = stop_words_polish.split(", ")
stop_words_polish = get_stop_words("pl") + stop_words_polish
stop_words_polish = list(set(stop_words_polish))

stop_words_polish.extend(["prawo", "podatek" , "prawny", "v1", "dochodowy", "pit",
                          "interpretacja", "s1", "s2",
                          "wnioskodawca","wnioskodawczyni", "podatkowy", "bydgoszcz",
                           "wartość", "działalność", "rok", "ustawa",
                          "v2", "artykuł", "usta",
                         "indywidualny","pkt", "lubić","ustęp", "oda", "rocznik", "pita",
                          "dzień", " przychód", "prawa", "lit.",
                          "wniosek", "prawy", "rodzaj", "punkt", "dzień", "artykuł"])

patterns_to_be_removed = [':a ', ':a1 ',':a2 ',':a3 ',
                          ':b ',':b1 ',':b2 ',':c ',
                          ':d ',':d1 ',':d2 ',':i ',
                          ':i1 ',':i2 ',':j ',':n ',
                          ':n1 ',':n2 ',':o ',':p ',
                          ':p1 ',':p2 ',':q ',':q2 ',
                          ':s ',':s1 ',':s2 ',':s3 ',
                          ':s4 ',':s5 ',':v ',':v1 ',
                          ':v2 ',':v3 ',':v4 ']

