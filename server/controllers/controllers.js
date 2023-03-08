


const model = require('../model/model')

// const getAllBooks = async(req,res,next) => {
//     let books;
//     try{
//         books = await Book.find();
//     }catch(err){
//         console.log(err);
//     }

//     if(!books){
//         return res.status(404).json({message:"No Books Found!"});
//     }
//     return res.status(200).json({books});
// };



// const getById = async(req,res,next) => {
//     const id = req.params.id;
//     let book;
//     try{
//         book = await Book.findById(id);
//     }catch(err){
//         console.log(err);
//     }

//     if(!book){
//         return res.status(404).json({message:"No Book Found!"});
//     }
//     return res.status(200).json({book});
// };



const addTickets = async (req, res, next) => {
    const { name, createddate, reason, issue, status } = req.body;
    let tickets;
    try {
    tickets = new tickets({
    name,
    createddate,
    reason,
    issue,
    status,
        
      });
      await tickets.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!tickets) {
      return res.status(500).json({ message: "Unable To Add!" });
    }
    return res.status(201).json({ tickets });
  };



// const updateBook = async (req, res, next) => {
//     const id = req.params.id;
//     const { name, author, description, price, available, image } = req.body;
//     let book;
//     try {
//       book = await Book.findByIdAndUpdate(id, {
//         name,
//         author,
//         description,
//         price,
//         available,
//         image,
//       });
//       book = await book.save();
//     } catch (err) {
//       console.log(err);
//     }
//     if (!book) {
//       return res.status(404).json({ message: "Unable To Update!" });
//     }
//     return res.status(200).json({ book });
//   };



//   const deleteBook = async (req, res, next) => {
//     const id = req.params.id;
//     let book;
//     try {
//       book = await Book.findByIdAndRemove(id);
//     } catch (err) {
//       console.log(err);
//     }
//     if (!book) {
//       return res.status(404).json({ message: "Unable To Delete!" });
//     }
//     return res.status(200).json({ message: "Deleted Successfully!" });
//   };



// exports.getAllBooks = getAllBooks;
// exports.getById = getById;
exports.addTickets = addTickets;
// exports.updateBook = updateBook;
// exports.deleteBook = deleteBook;

