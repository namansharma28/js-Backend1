// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } 
//   catch (error) {
//     res
//       .status(err.code || 500)
//       .json({ message: error.message || "Something went wrong" });
//   }
// };

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next);
    }
}

export { asyncHandler };
