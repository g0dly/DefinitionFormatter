// https://dictionaryapi.dev/

class DefinitionFormatter {
  constructor() {
    this.axios = require('axios')
  }

  async define(word) {
    const FetchedData = await fetch(word),
      FormattedData = format(FetchedData);

    return FormattedData
  }

  async fetch(word) {
    const FetchedResult = await this.axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    return FetchedResult.data
  }

  format(data) {
    const FormattedResult = data;
    return FormattedResult;
  }
}

const cl = new DefinitionFormatter;

const result = cl.fetch('hi').then(console.log);
