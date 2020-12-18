var mongoose = require("mongoose"),
  User = mongoose.model("User");

exports.list_all_users = function (req, res) {
  console.log("rsds");
  User.find({}, function (err, user) {
    console.log("rasasds");
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function (req, res) {
  var new_user = new User(req.body);
  new_user.save(function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function (req, res) {
  console.log(req.params.userId);
  User.findById(req.params.userId, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.read_a_user_by_cognito_username = function (req, res) {
  console.log(req.params.cognito_username);
  User.find(
    { cognito_username: req.params.cognito_username },
    function (err, user) {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

exports.update_a_user = function (req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    function (err, user) {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

exports.delete_a_user = function (req, res) {
  User.remove(
    {
      _id: req.params.userId,
    },
    function (err, user) {
      if (err) res.send(err);
      res.json({ message: "user successfully deleted" });
    }
  );
};
