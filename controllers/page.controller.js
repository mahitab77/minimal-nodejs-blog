exports.getHomePage = (req, res) => {
    res.render('pages/index');
  };
  
  exports.getAboutPage = (req, res) => {
    res.render('pages/about');
  };
  
  exports.getContactPage = (req, res) => {
    res.render('pages/contact');
  };
  
  exports.getPostPage = (req, res) => {
    res.render('pages/post');
  };
  