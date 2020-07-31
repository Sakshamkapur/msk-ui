import React from 'react';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    color: 'black'
  },
  headlineText: {
    margin: 0,
    backgroundColor: theme.value.color,
    padding: 20,
    color: 'white'
  },
  hobbiesItem: {
    margin: '10px 5px',
    paddingLeft: '5px',
    fontWeight: 'bold'
  },
  hobbiesContainer: {
    lineHeight: 2,
    margin: 0,
    padding: '0 15px'
  }
});

const Basic = ({ theme, headlineText, listStyleType, hobbies }) => {
  const styles = useStyles(theme);

  return (
    <div
      style={{
        ...styles.root
      }}
    >
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr style={{ margin: 0 }} />
      <div style={{ padding: 20 }}>
        <ol style={{...styles.hobbiesContainer,listStyleType: listStyleType.value }}>
          {hobbies.value.map((hobby, id) => (
            <li key={id} style={styles.hobbiesItem}>{hobby.value}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Basic;
