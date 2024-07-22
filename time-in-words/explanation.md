# Time in words

This, even though is tagged as "medium" is super trivial. I don't think that this problem really requires any explanation.

The only problematic thing is creating a huge object with all the phrases corresponding to numbers, like:

```python
minutes_dict = {
    '0': 'o\'clock',
    '1': 'one minute past',
    '2': 'two minutes past',
    # and more...
    '50': 'ten minutes to',
    '51': 'nine minutes to',
    '52': 'eight minutes to',
    '53': 'seven minutes to',
    '54': 'six minutes to',
    '55': 'five minutes to',
    # and more...
}
```

once you prepare a dictionary like that, it's just a matter of checking the minutes and the hours and returning the correct phrase.

## Solution

After creating a dictionary like that, the solution is trivial:

```python
result = ''
if m == 0:
    result = hour_dict[str(h)] + ' o\' clock'
    print(result)
elif m <= 30:
    result = minutes_dict[str(m)] + ' ' + hour_dict[str(h)]
    print(result)
elif m > 30:
    result = minutes_dict[str(m)] + ' ' + hour_dict[str(h + 1)]
    print(result)

return result
```

I completed this problem in less than 5 minutes by generating the entire `hours_dict` and `minutes_dict` in ChatGPT 4 which handled it flawlessly.

I will not translate this solution to other languages, I think that it's simple enough.

## Analysis

**Problem difficulty**: easy
**Problem type**: string
**Time complexity**: O(1)
