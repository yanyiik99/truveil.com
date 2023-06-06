const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         Name:
 *           type: string
 *           description: The name of the product
 *           default: Villa Ubud
 *           example: Villa Ubud
 *         VillaAnonymous:
 *           type: string
 *           description: The anonymous name of the villa
 *           default: Villa Ubud
 *         Location:
 *           type: string
 *           description: The location of the villa
 *           default: Ubud
 *         LinkGmaps:
 *           type: string
 *           description: The Google Maps link of the villa
 *           default: http://maps.google.com/...
 *         Contact:
 *           type: string
 *           description: The contact information for the villa
 *           default: +1234567890
 *         RentType:
 *           type: string
 *           description: The type of rent for the villa
 *           enum: ["Daily", "Weekly", "Monthly"]
 *           default: Daily
 *         Price:
 *           type: number
 *           description: The price of the villa
 *           default: 500
 *         Bedroom:
 *           type: number
 *           description: The number of bedrooms in the villa
 *           default: 3
 *         Swimming:
 *           type: string
 *           enum: ["Yes", "No"]
 *           description: Indicates if the villa has a swimming pool
 *           default: Yes
 *         LivingRoom:
 *           type: string
 *           enum: ["Yes", "No"]
 *           description: Indicates if the villa has a living room
 *           default: Yes
 *         IncludeFacilities:
 *           type: string
 *           description: The facilities included in the villa
 *           default: Lorem ipsum dolor sit amet...
 *         Description:
 *           type: string
 *           description: The description of the villa
 *           default: Lorem ipsum dolor sit amet...
 *       required:
 *         - Name
 *         - VillaAnonymous
 *         - Location
 *         - LinkGmaps
 *         - Contact
 *         - RentType
 *         - Price
 *         - Bedroom
 *         - Swimming
 *         - LivingRoom
 *         - IncludeFacilities
 *         - Description
 */

const ProductSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
    },
    VillaAnonymous: {
      type: String,
      required: true
    },
    Location: {
      type: String,
      required: true
    },
    LinkGmaps: {
      type: String,
      required: true
    },
    Contact: {
      type: String,
      required: true
    },
    RentType: {
      type: String,
      required: true
    },
    Price: {
      type: Number,
      required: true
    },
    Bedroom: {
      type: Number,
      required: true
    },
    Swimming: {
      type: String,
      enum: ["Yes", "No"],
      required: true
    },
    LivingRoom: {
      type: String,
      enum: ["Yes", "No"],
      required: true
    },
    IncludeFacilities: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', ProductSchema);
