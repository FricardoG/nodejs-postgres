const bcrypt = require('bcrypt');

async function verifyPassword(){
  const myPassword = 'admin123';
  const hash = '$2b$10$5RyHWlWjonVDKWPYeAkwIu5K.WJ/erBmsP/oIaIjj5k0eRvdSdpLW';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();