import UserService from "../services/user-service";

class UserController {
  async create(req, res) {
    const { name, email } = req.body;
    return await UserService.store(name, email)
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => res.json({ Error: err.message }));
  }
  async findAll(req, res) {
    return await UserService.findAll()
      .then((response) => {
        return res.json(response);
      })
      .catch((error) => res.json({ Error: error.message }));
  }
}

export default new UserController();
