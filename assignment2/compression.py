'''
 Performs basic string compression
 Using the counts of repeated characters

 @param original_string The string that will be compressed
'''
def compress_string(original_string):
    freq_dict = {}

    # Populating the frequency dictionary
    for char in original_string:
        freq_dict[char] = (freq_dict.get(char) or 0) + 1

    # Creating string with keys and values compacted
    compacted_string = ''
    for key, value in freq_dict.items():
        compacted_string += (key + str(value))

    return compacted_string if len(compacted_string) < len(original_string) else original_string

## TEST CASES ##
print(compress_string("mmatttttccchhaaa"))  # m2a4t5c3h2
print(compress_string("eeerrorr"))  # e3r4o1
print(compress_string("kkiiittyyyyyy"))  # k2i3t2y6
print(compress_string("autumnal"))  # autumnal
