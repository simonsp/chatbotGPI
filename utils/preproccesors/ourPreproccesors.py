"""
Statement pre-processors.
"""


def clean_whitespace(statement):
    """
    Remove any consecutive whitespace characters from the statement text.
    """
    import re

    # Replace linebreaks and tabs with spaces
    statement.text = statement.text.replace('\n', ' ').replace('\r', ' ').replace('\t', ' ')

    # Remove any leeding or trailing whitespace
    statement.text = statement.text.strip()

    # Remove consecutive spaces
    statement.text = re.sub(' +', ' ', statement.text)

    return statement

def to_lower_case(statement):
    """
    Set the statement to lowercase for increase the match performance
    """
    statement.text = statement.text.lower()

    return statement

def remove_characters(statement):
    """
    Remove characters like ? - ! {} [] ` . ¡ ¿ for increase the match performance
    """

    stopCharacters = "¿-!{[}]_=¡;`&%$#|°<>"

    for i in range (0, len(stopCharacters)):
        statement.text = statement.text.replace(stopCharacters[i], '')

    #FOR TESTING UNCOMMENT AND RUN WITH python Adding a statement class with text atributte
    #print(statement.text)
    return statement