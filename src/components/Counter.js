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
            {/* ****** BUTTON MORE ***** */}
            {counters < 10 && (
              <button
                className="plus"
                onClick={() => {
                  const newCounters = [...counters];
                  newCounters[index]++;
                  setCounters(newCounters);
                }}
              >
                <i class="fas fa-plus"></i>
              </button>
            )}

            {/* ****** COUNTER ***** */}
            <div className="result">{counter}</div>

            {/* ****** BUTTON LESS ***** */}
            {counters > 0 && (
              <button
                className="minus"
                onClick={() => {
                  const newCounters = [...counters];
                  newCounters[index]--;
                  setCounters(newCounters);
                }}
              >
                <i class="fas fa-minus"></i>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
