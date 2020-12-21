exports.getPhones = (req, res, next) => {
  res.render('pages/phones');
};

exports.getLaptop = (req, res, next) => {
  res.render('pages/laptop');
};

exports.getDslr = (req, res, next) => {
  res.render('pages/dslr');
};