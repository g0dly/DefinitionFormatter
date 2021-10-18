/**
 * Definition Formatter
 * @class
 * https://dictionaryapi.dev/
 */
class DefinitionFormatter {
  constructor() {
    this.axios = require('axios');
    this.prompts = require('prompts');
  }

  /**
   * Creates a prompt for a word, then supplies a definition if found.
   */
  async prompt() {
    const response = await this.prompts({
      type: 'text',
      name: 'word',
      message: 'What would you like to define?'
    });

    const definition = await this.define(response.word)
    return console.log(definition)
  }

  /**
   * Fetches and formats the definition of a word.
   * @param {string} word - The word to define.
   */
  async define(word) {
    const FetchedData = await this.fetch(word),
      FormattedData = this.format(FetchedData);

    return FormattedData
  }

  /**
   * Fetches a word from the Dictionary API.
   * @param {string} word - The word to fetch.
   */
  async fetch(word) {
    const FetchedResult = await this.axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    return FetchedResult.data[0]
  }

  /**
   * Formats the definition of a word.
   * @param {object} data - The definition to format.
   */
  format(data) {
    const FormattedResult = data;
    return FormattedResult;
  }
}

module.exports = DefinitionFormatter;
