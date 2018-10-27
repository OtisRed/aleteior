def colorize(val):
    if val < 0:
        color = 'red'
    elif val > 10:
        color = 'green'
    else:
        color = 'black'
    return 'color: %s' % color