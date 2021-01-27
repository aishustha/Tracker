const NOTES = [];

/**
 * API has 4 methods
 * GET -> get data
 * POST -> create new data
 * PUT -> update existing data
 * DELETE -> delete data
 */

export default async(req, res) => {
  switch (req.method) {
    case 'GET':
      res.statusCode = 200
      res.json({ data: NOTES })
      break;
    case 'POST':

    //req.body - An object containing the body parse by content-type or null if no body was sent

      const id = req.body.id;
      const title = req.body.title;
      const description = req.body.description;
      NOTES.push({id: id,title: title, description: description});
      console.log('post request');
      console.log(NOTES);
      res.statusCode = 200
      res.json({ data: NOTES });
      break;
    default:
      break;
  }  
}

