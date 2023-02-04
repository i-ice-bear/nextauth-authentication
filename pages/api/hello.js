export default function echoAuth(req, res) {
  req.status(200).json({ hello: "Head" });
}
