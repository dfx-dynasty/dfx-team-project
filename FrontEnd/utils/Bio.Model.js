export default class BioModel {
  constructor(id, firstname, lastname, headshot, nationality, pronouns, headline, overview, socials) {
    this._id = id;
    this.bio = {
      firstname: firstname,
      lastname: lastname,
      headshot: headshot,
      nationality: nationality,
      pronouns: pronouns,
      headline: headline,
      overview: overview,
      socials: socials,
    };
  }
}
