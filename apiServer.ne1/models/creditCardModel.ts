import mongoose from 'mongoose';

const creditCardSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  securityCode: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
});

const CreditCard = mongoose.model('CreditCard', creditCardSchema);
export default CreditCard
