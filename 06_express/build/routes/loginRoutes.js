"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuthentication(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Unauthorized!');
}
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
  <form method="POST">
    <div>
        <label>Email</label>
        <input name="email" />
    </div>
    <div>
        <label>Password</label>
        <input name="password" type="password" />
    </div>
    <button>Submit</button>
  </form>
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    if (email && password && email === 'user@email.com' && password === 'Password1234') {
        // Mark this person as logged in
        req.session = { loggedIn: true };
        // Redirect them to the root route
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuthentication, (req, res) => {
    res.send('Welcome to protected route, logged in user!');
});
