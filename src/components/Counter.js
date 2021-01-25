import React from "react";

const Counter = ({ counters, setCounters }) => {
  return (
    <div className="App">
      {/* ****** BUTTON ADD COUNTER ***** */}
      {counters.length < 3 && (
        <button
          className="btn-counter"
          onClick={() => {
            let newCounters = [...counters, 0];
            setCounters(newCounters);
          }}
        >
          Add counter
        </button>
      )}

      {counters.map((counter, index) => (
        <div key={index}>
          <div className="counter">
            {/* ****** BUTTON LESS ***** */}

            {counter > 0 && (
              <button
                className="minus"
                onClick={() => {
                  const newCounters = [...counters];
                  newCounters[index]--;
                  setCounters(newCounters);
                }}
              >
                <i className="fas fa-minus"></i>
              </button>
            )}

            {/* ****** COUNTER ***** */}
            <div>
              <div className="result">{counter}</div>
              <button
                className="btn-reset"
                onClick={() => {
                  // if counter is greater than 0, the new value of counter is 0
                  if (counter > 0) {
                    const newCounters = [...counters];
                    newCounters[index] = 0;
                    setCounters(newCounters);
                  }
                  // if counter is egual to 0, the counter disappears
                  if (counter === 0) {
                    const newCounters = counters.filter(
                      (value, indexToDelete) => indexToDelete !== index
                    );
                    setCounters(newCounters);
                  }
                }}
              >
                reset
              </button>
            </div>

            {/* ****** BUTTON MORE ***** */}
            {counter < 10 && (
              <button
                className="plus"
                onClick={() => {
                  const newCounters = [...counters];
                  newCounters[index]++;
                  setCounters(newCounters);
                }}
              >
                <i className="fas fa-plus"></i>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
