const app = require('./app')
const port = process.env.Port || 5000
app.listen(port, () => console.log(`Server has benn started ${port}`))
