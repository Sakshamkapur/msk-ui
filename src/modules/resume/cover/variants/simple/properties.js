import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.iceWhite,
    required: true
  },
  name: {
    name: 'Name',
    type: propertyTypes.STRING,
    value: 'Name',
    required: true
  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Designation',
    required: false
  },
  company: {
    name: 'Company',
    type: propertyTypes.STRING,
    value: 'Company name',
    required: false
  },
  location: {
    name: 'Location',
    type: propertyTypes.STRING,
    value: 'Location',
    required: true
  },
  emailId: {
    name: 'Email ID',
    type: propertyTypes.EMAIL,
    value: 'Email ID',
    required: true
  },
  phoneNo: {
    name: 'Phone No',
    type: propertyTypes.NUMBER,
    value: '9999999999',
    required: true
  },
};

export default properties;