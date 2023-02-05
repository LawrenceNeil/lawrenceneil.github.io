const db = require("../data/dbconfig");
const crypto = require("crypto");

const getStudent = async (hashed_id) => {
  let id = null;
  let date = new Date().toISOString().substr(0, 10);
  const findStudent = `
    SELECT * FROM students WHERE hashed_id = '${hashed_id}'
  `;
  await db.query(findStudent, (err, results, field) => {
    if (err) console.log(err);

    if (results.length > 0) {
      id = results[0].id;
      checkStatus(date, id);
    } else {
      console.log("Student not found");
    }
  });
};

const checkStatus = async (date, id) => {
  let status = null;
  const checkStatus = `
    SELECT * FROM attendance WHERE date = '${date}' AND hashed_id = ${id} ORDER BY id DESC
  `;

  await db.query(checkStatus, (e, r, f) => {
    if (e) console.log(e);
    if (r.length > 0) {
      r[0].status == "inside" ? (status = "outside") : (status = "inside");
    } else {
      status = "inside";
    }
    console.log(status);
    addAttendance(id, date, status);
  });
};
const addAttendance = async (id, date, status) => {
  const time = new Date().toLocaleTimeString();
  const addAttendance = `
    INSERT INTO attendance (hashed_id, date, time, status)
    VALUES ('${id}', '${date}', '${time}', '${status}')
  `;
  await db.query(addAttendance, (e, r, f) => {
    if (e) console.log(e);
    console.log("Attendance added");
  });
};
exports.add = (req, res) => {
  const hash = crypto
    .createHash("sha256")
    .update(req.body.hashed_id)
    .digest("hex");
  console.log(hash);
  getStudent(hash);
  res.json({ message: "Attendance added" });
};

exports.addAuto = (req, res) => {
  console.log(req.body);
  const hash = req.body.hashed_id;
  console.log(hash);
  getStudent(hash);
  res.json({ message: "Attendance added" });
};

exports.viewAll = (req, res) => {
  const getAllAttendance = "SELECT * FROM attendance";
  db.query(getAllAttendance, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
};

exports.view = (req, res) => {
  const getAttendance = `SELECT * FROM attendance WHERE id = ${req.params.id}`;
  db.query(getAttendance, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
};

exports.edit = (req, res) => {
  const id = req.params.id;
  const { date, time, status } = req.body;

  const updateAttendance = `
    UPDATE attendance
    SET date = '${date}', time = '${time}', status = '${status}'
    WHERE id = '${id}'
  `;

  db.query(updateAttendance, (err, result) => {
    if (err) console.log(err);
    res.json({ message: "Attendance updated" });
  });
};

exports.del = (req, res) => {
  const deleteAttendance = `
    DELETE FROM attendance
    WHERE id = '${req.params.id}'
    `;

  db.query(deleteAttendance, (err, result) => {
    if (err) console.log(err);
    res.json({ message: "Attendance deleted" });
  });
};
