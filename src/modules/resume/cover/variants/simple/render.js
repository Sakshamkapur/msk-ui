import React from 'react';

const useStyles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    fontWeight: 'bold'
  },
  name: {
    margin: 0,
    fontSize: '40px'
  },
  employment: {
    margin: 0
  },
  detialContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px'
  },
  detialItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0 10px 0'
  },
  detailIcon: {
    width: '15px',
    height: '15px',
    marginRight: '10px'
  },
  detialText: {
    margin: 0
  }
});

const Simple = ({ theme, name, designation, company, location, emailId, phoneNo }) => {
  const styles = useStyles();

  const locationIcon =
    'https://github.com/fouzanmohd/webproject1/blob/master/place.png?raw=true';
  const emailIcon =
    'https://github.com/fouzanmohd/webproject1/blob/master/email.png?raw=true';
  const phoneIcon =
    'https://github.com/fouzanmohd/webproject1/blob/master/telephone.png?raw=true';


  return (
    <div style={{...styles.root,backgroundColor: theme.value.color}}>
      <h1 style={styles.name}>{name.value}</h1>
      <h3 style={styles.employment}>{designation.value}, {company.value}</h3>
      <div style={styles.detialContainer}>
        <div style={styles.detialItem}>
          <img style={styles.detailIcon} src={locationIcon} />
          <p style={styles.detialText}>
            {location.value}
          </p>
        </div>
        <div style={styles.detialItem}>
          <img style={styles.detailIcon} src={emailIcon} />
          <p style={styles.detialText}>
            {emailId.value}
          </p>
        </div>
        <div style={styles.detialItem}>
          <img style={styles.detailIcon} src={phoneIcon} />
          <p style={styles.detialText}>
            {phoneNo.value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Simple;
