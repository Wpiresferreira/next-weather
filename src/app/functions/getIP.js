export default function getIP(req, res) {
    let ip;
  
    if (req.headers["x-forwarded-for"]) {
      ip = req.headers["x-forwarded-for"].split(',')[0]
    } else if (req.headers["x-real-ip"]) {
      ip = req.connection.remoteAddress
    } else {
      ip = req.connection.remoteAddress
    }
  
    console.log(ip);
  
    console.log(ip)
    res.status(200).json({ name: 'John Doe' })
  }