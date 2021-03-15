const superAdmin = require('../models/model.superAdmin');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require("../configs/jwt.config")
const { body, validationResult } = require('express-validator');


