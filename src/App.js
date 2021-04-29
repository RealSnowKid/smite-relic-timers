import React, { useState } from 'react';
import { Dropdown, ButtonGroup, Button, Alert } from 'react-bootstrap';
import { ImArrowUp } from 'react-icons/im';
import logo from './logo.png';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
  } = useTimer({ expiryTimestamp, onExpire: () => console.log('expired') });

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '30px' }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
    </div>
  );
}

function App() {
  const [soloRelic1, setSoloRelic1] = useState("Relic 1");
  const [soloRelic2, setSoloRelic2] = useState("Relic 2");
  const [jungRelic1, setJungRelic1] = useState("Relic 1");
  const [jungRelic2, setJungRelic2] = useState("Relic 2");
  const [midRelic1, setMidRelic1] = useState("Relic 1");
  const [midRelic2, setMidRelic2] = useState("Relic 2");
  const [adcRelic1, setAdcRelic1] = useState("Relic 1");
  const [adcRelic2, setAdcRelic2] = useState("Relic 2");
  const [suppRelic1, setSuppRelic1] = useState("Relic 1");
  const [suppRelic2, setSuppRelic2] = useState("Relic 2");

  const [alertShow, setAlertShow] = useState(false);
  const [alerMessage, setAlertMessage] = useState("No Relic Selected!");

  const time = new Date();
  time.setSeconds(time.getSeconds() + 150);

  const ChangeRelic = e => {
    const eventSplit = e.split("-");
    switch (eventSplit[0]) {
      case "#solo1":
        switch (eventSplit[1]) {
          case "beads":
            setSoloRelic1("Beads")
            break;
          case "aegis":
            setSoloRelic1("Aegis")
            break;
          case "blink":
            setSoloRelic1("Blink")
            break;
          case "shell":
            setSoloRelic1("Shell")
            break;
          default:
            setSoloRelic1("Relic 1")
            break;
        }
        break;
      case "#solo2":
        switch (eventSplit[1]) {
          case "beads":
            setSoloRelic2("Beads")
            break;
          case "aegis":
            setSoloRelic2("Aegis")
            break;
          case "blink":
            setSoloRelic2("Blink")
            break;
          case "shell":
            setSoloRelic2("Shell")
            break;
          default:
            setSoloRelic2("Relic 2")
            break;
        }
        break;
      case "#jung1":
        switch (eventSplit[1]) {
          case "beads":
            setJungRelic1("Beads")
            break;
          case "aegis":
            setJungRelic1("Aegis")
            break;
          case "blink":
            setJungRelic1("Blink")
            break;
          case "shell":
            setJungRelic1("Shell")
            break;
          default:
            setJungRelic1("Relic 1")
            break;
        }
        break;
      case "#jung2":
        switch (eventSplit[1]) {
          case "beads":
            setJungRelic2("Beads")
            break;
          case "aegis":
            setJungRelic2("Aegis")
            break;
          case "blink":
            setJungRelic2("Blink")
            break;
          case "shell":
            setJungRelic2("Shell")
            break;
          default:
            setJungRelic2("Relic 2")
            break;
        }
        break;
      case "#mid1":
        switch (eventSplit[1]) {
          case "beads":
            setMidRelic1("Beads")
            break;
          case "aegis":
            setMidRelic1("Aegis")
            break;
          case "blink":
            setMidRelic1("Blink")
            break;
          case "shell":
            setMidRelic1("Shell")
            break;
          default:
            setMidRelic1("Relic 2")
            break;
        }
        break;
      case "#mid2":
        switch (eventSplit[1]) {
          case "beads":
            setMidRelic2("Beads")
            break;
          case "aegis":
            setMidRelic2("Aegis")
            break;
          case "blink":
            setMidRelic2("Blink")
            break;
          case "shell":
            setMidRelic2("Shell")
            break;
          default:
            setMidRelic2("Relic 2")
            break;
        }
        break;
      case "#adc1":
        switch (eventSplit[1]) {
          case "beads":
            setAdcRelic1("Beads")
            break;
          case "aegis":
            setAdcRelic1("Aegis")
            break;
          case "blink":
            setAdcRelic1("Blink")
            break;
          case "shell":
            setAdcRelic1("Shell")
            break;
          default:
            setAdcRelic1("Relic 2")
            break;
        }
        break;
      case "#adc2":
        switch (eventSplit[1]) {
          case "beads":
            setAdcRelic2("Beads")
            break;
          case "aegis":
            setAdcRelic2("Aegis")
            break;
          case "blink":
            setAdcRelic2("Blink")
            break;
          case "shell":
            setAdcRelic2("Shell")
            break;
          default:
            setAdcRelic2("Relic 2")
            break;
        }
        break;
      case "#supp1":
        switch (eventSplit[1]) {
          case "beads":
            setSuppRelic1("Beads")
            break;
          case "aegis":
            setSuppRelic1("Aegis")
            break;
          case "blink":
            setSuppRelic1("Blink")
            break;
          case "shell":
            setSuppRelic1("Shell")
            break;
          default:
            setSuppRelic1("Relic 2")
            break;
        }
        break;
      case "#supp2":
        switch (eventSplit[1]) {
          case "beads":
            setSuppRelic2("Beads")
            break;
          case "aegis":
            setSuppRelic2("Aegis")
            break;
          case "blink":
            setSuppRelic2("Blink")
            break;
          case "shell":
            setSuppRelic2("Shell")
            break;
          default:
            setSuppRelic2("Relic 2")
            break;
        }
        break;
      default:
        break;
    }
  }

  const UpgradeRelic = (role) => {
    const eventSplit = role.split("-");
    switch (eventSplit[0]) {
      case "solo":
        switch (eventSplit[1]) {
          case "1":
            if (soloRelic1 !== "Relic 1") {
              setSoloRelic1(soloRelic1 + " 2");
              setAlertShow(false);
            } else {
              setAlertMessage("No First Relic in Solo!");
              setAlertShow(true);
            }
            break;
          case "2":
            if (soloRelic2 !== "Relic 2") {
              setSoloRelic2(soloRelic2 + " 2");
              setAlertShow(false);
            } else {
              setAlertMessage("No Second Relic in Solo!");
              setAlertShow(true);
            }
            break;
          default:
            console.log("weird solo");
            break;
        }
        break;
      case "jung":
        switch (eventSplit[1]) {
          case "1":
            if (jungRelic1 !== "Relic 1") {
              setJungRelic1(jungRelic1 + " 2");
              setAlertShow(false);
            } else {
              setAlertMessage("No First Relic in Jungle!");
              setAlertShow(true);
            }
            break;
          case "2":
            if (jungRelic2 !== "Relic 2") {
              setJungRelic2(jungRelic2 + " 2");
              setAlertShow(false);
            } else {
              setAlertMessage("No Second Relic in Jungle!");
              setAlertShow(true);
            }
            break;
          default:
            console.log("weird jung");
            break;
        }
        break;
      case "mid":
        switch (eventSplit[1]) {
          case "1":
            if (midRelic1 !== "Relic 1") {
              setMidRelic1(midRelic1 + " 2");
              setAlertShow(false);
            } else {
              setAlertMessage("No First Relic in Mid!");
              setAlertShow(true);
            }
            break;
          case "2":
            if (midRelic2 !== "Relic 2") {
              setMidRelic2(midRelic2 + " 2");
              setAlertShow(false);
            } else {
              setAlertMessage("No Second Relic in Mid!");
              setAlertShow(true);
            }
            break;
          default:
            console.log("weird mid");
            break;
        }
        break;
      case "adc":
        switch (eventSplit[1]) {
          case "1":
            if (adcRelic1 !== "Relic 1") {
              setAdcRelic1(adcRelic1 + " 2");
              setAlertShow(false);
            } else {
              setAlertMessage("No First Relic in Hunter!");
              setAlertShow(true);
            }
            break;
          case "2":
            if (adcRelic2 !== "Relic 2") {
              setAdcRelic2(adcRelic2 + " 2");
              setAlertShow(false);
            } else {
              setAlertMessage("No Second Relic in Hunter!");
              setAlertShow(true);
            }
            break;
          default:
            console.log("weird adc");
            break;
        }
        break;
      case "supp":
        switch (eventSplit[1]) {
          case "1":
            if (suppRelic1 !== "Relic 1") {
              setSuppRelic1(suppRelic1 + " 2");
              setAlertShow(false);
            } else {
              setAlertMessage("No First Relic in Support!");
              setAlertShow(true);
            }
            break;
          case "2":
            if (suppRelic2 !== "Relic 2") {
              setSuppRelic2(suppRelic2 + " 2");
              setAlertShow(false);
            } else {
              setAlertMessage("No Second Relic in Support!");
              setAlertShow(true);
            }
            break;
          default:
            console.log("weird supp");
            break;
        }
        break;
      default:
        console.log("Default case on upgrade");
        break;
    }
  }

  return (
    <>
      <div className="container-fluid bg-info p-1"><div className="logoDiv"><img className="logo" src={logo} alt="SMITE RELIC TIMERS" /></div></div>
      <hr className="hor-line" />
      <Alert className="mx-auto my-3 w-25" variant="danger" show={alertShow} onClose={() => setAlertShow(false)} dismissible>
        <Alert.Heading>{alerMessage}</Alert.Heading>
      </Alert>
      <div className="container-fluid mt-4">
        <div className="row justify-content-around text-center">
          <div className="col-sm">
            <h1>Solo</h1>
            <div className="d-flex justify-content-center mb-4">
              <Dropdown as={ButtonGroup}>
                <Button onClick={() => MyTimer.start()}>{soloRelic1}</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#solo1-beads" onSelect={ChangeRelic}><img className="relic-icon" alt="Beads" src="https://web2.hirez.com/smite/item-icons/purification-beads.jpg" /> Beads</Dropdown.Item>
                  <Dropdown.Item href="#solo1-aegis" onSelect={ChangeRelic}><img className="relic-icon" alt="Aegis" src="https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg" /> Aegis</Dropdown.Item>
                  <Dropdown.Item href="#solo1-blink" onSelect={ChangeRelic}><img className="relic-icon" alt="Blink" src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg" /> Blink</Dropdown.Item>
                  <Dropdown.Item href="#solo1-shell" onSelect={ChangeRelic}><img className="relic-icon" alt="Shell" src="https://web2.hirez.com/smite/item-icons/magic-shell.jpg" /> Shell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success" className="p-1 ml-2" onClick={() => UpgradeRelic("solo-1")}><ImArrowUp className="mb-1 fs" /></Button>
            </div>
            <MyTimer expiryTimestamp={time} />
            <div className="d-flex justify-content-center">
              <Dropdown as={ButtonGroup}>
                <Button onClick={() => console.log("solo-2")}>{soloRelic2}</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#solo2-beads" onSelect={ChangeRelic}><img className="relic-icon" alt="Beads" src="https://web2.hirez.com/smite/item-icons/purification-beads.jpg" /> Beads</Dropdown.Item>
                  <Dropdown.Item href="#solo2-aegis" onSelect={ChangeRelic}><img className="relic-icon" alt="Aegis" src="https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg" /> Aegis</Dropdown.Item>
                  <Dropdown.Item href="#solo2-blink" onSelect={ChangeRelic}><img className="relic-icon" alt="Blink" src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg" /> Blink</Dropdown.Item>
                  <Dropdown.Item href="#solo2-shell" onSelect={ChangeRelic}><img className="relic-icon" alt="Shell" src="https://web2.hirez.com/smite/item-icons/magic-shell.jpg" /> Shell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success" className="p-1 ml-2" onClick={() => UpgradeRelic("solo-2")} type="button"><ImArrowUp className="mb-1 fs" /></Button>
            </div>
          </div>
          <div className="col-sm">
            <h1 className="ml-1">Jungle</h1>
            <div className="d-flex justify-content-center mb-4">
              <Dropdown as={ButtonGroup}>
                <Button onClick={() => console.log("jung-1")}>{jungRelic1}</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#jung1-beads" onSelect={ChangeRelic}><img className="relic-icon" alt="Beads" src="https://web2.hirez.com/smite/item-icons/purification-beads.jpg" /> Beads</Dropdown.Item>
                  <Dropdown.Item href="#jung1-aegis" onSelect={ChangeRelic}><img className="relic-icon" alt="Aegis" src="https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg" /> Aegis</Dropdown.Item>
                  <Dropdown.Item href="#jung1-blink" onSelect={ChangeRelic}><img className="relic-icon" alt="Blink" src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg" /> Blink</Dropdown.Item>
                  <Dropdown.Item href="#jung1-shell" onSelect={ChangeRelic}><img className="relic-icon" alt="Shell" src="https://web2.hirez.com/smite/item-icons/magic-shell.jpg" /> Shell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success" className="p-1 ml-2" onClick={() => UpgradeRelic("jung-1")}><ImArrowUp className="mb-1 fs" /></Button>
            </div>
            <div className="d-flex justify-content-center">
              <Dropdown as={ButtonGroup}>
                <Button onClick={() => console.log("jung-2")}>{jungRelic2}</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#jung2-beads" onSelect={ChangeRelic}><img className="relic-icon" alt="Beads" src="https://web2.hirez.com/smite/item-icons/purification-beads.jpg" /> Beads</Dropdown.Item>
                  <Dropdown.Item href="#jung2-aegis" onSelect={ChangeRelic}><img className="relic-icon" alt="Aegis" src="https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg" /> Aegis</Dropdown.Item>
                  <Dropdown.Item href="#jung2-blink" onSelect={ChangeRelic}><img className="relic-icon" alt="Blink" src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg" /> Blink</Dropdown.Item>
                  <Dropdown.Item href="#jung2-shell" onSelect={ChangeRelic}><img className="relic-icon" alt="Shell" src="https://web2.hirez.com/smite/item-icons/magic-shell.jpg" /> Shell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success" className="p-1 ml-2" onClick={() => UpgradeRelic("jung-2")}><ImArrowUp className="mb-1 fs" /></Button>
            </div>
          </div>
          <div className="col-sm">
            <h1 className="ml-4">Mid</h1>
            <div className="d-flex justify-content-center mb-4">
              <Dropdown as={ButtonGroup}>
                <Button onClick={() => console.log("mid-1")}>{midRelic1}</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#mid1-beads" onSelect={ChangeRelic}><img className="relic-icon" alt="Beads" src="https://web2.hirez.com/smite/item-icons/purification-beads.jpg" /> Beads</Dropdown.Item>
                  <Dropdown.Item href="#mid1-aegis" onSelect={ChangeRelic}><img className="relic-icon" alt="Aegis" src="https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg" /> Aegis</Dropdown.Item>
                  <Dropdown.Item href="#mid1-blink" onSelect={ChangeRelic}><img className="relic-icon" alt="Blink" src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg" /> Blink</Dropdown.Item>
                  <Dropdown.Item href="#mid1-shell" onSelect={ChangeRelic}><img className="relic-icon" alt="Shell" src="https://web2.hirez.com/smite/item-icons/magic-shell.jpg" /> Shell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success" className="p-1 ml-2" onClick={() => UpgradeRelic("mid-1")}><ImArrowUp className="mb-1 fs" /></Button>
            </div>
            <div className="d-flex justify-content-center">
              <Dropdown as={ButtonGroup}>
                <Button onClick={() => console.log("mid-2")}>{midRelic2}</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#mid2-beads" onSelect={ChangeRelic}><img className="relic-icon" alt="Beads" src="https://web2.hirez.com/smite/item-icons/purification-beads.jpg" /> Beads</Dropdown.Item>
                  <Dropdown.Item href="#mid2-aegis" onSelect={ChangeRelic}><img className="relic-icon" alt="Aegis" src="https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg" /> Aegis</Dropdown.Item>
                  <Dropdown.Item href="#mid2-blink" onSelect={ChangeRelic}><img className="relic-icon" alt="Blink" src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg" /> Blink</Dropdown.Item>
                  <Dropdown.Item href="#mid2-shell" onSelect={ChangeRelic}><img className="relic-icon" alt="Shell" src="https://web2.hirez.com/smite/item-icons/magic-shell.jpg" /> Shell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success" className="p-1 ml-2" onClick={() => UpgradeRelic("mid-2")}><ImArrowUp className="mb-1 fs" /></Button>
            </div>
          </div>
          <div className="col-sm">
            <h1>Hunter</h1>
            <div className="d-flex justify-content-center mb-4">
              <Dropdown as={ButtonGroup}>
                <Button onClick={() => console.log("adc-1")}>{adcRelic1}</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#adc1-beads" onSelect={ChangeRelic}><img className="relic-icon" alt="Beads" src="https://web2.hirez.com/smite/item-icons/purification-beads.jpg" /> Beads</Dropdown.Item>
                  <Dropdown.Item href="#adc1-aegis" onSelect={ChangeRelic}><img className="relic-icon" alt="Aegis" src="https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg" /> Aegis</Dropdown.Item>
                  <Dropdown.Item href="#adc1-blink" onSelect={ChangeRelic}><img className="relic-icon" alt="Blink" src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg" /> Blink</Dropdown.Item>
                  <Dropdown.Item href="#adc1-shell" onSelect={ChangeRelic}><img className="relic-icon" alt="Shell" src="https://web2.hirez.com/smite/item-icons/magic-shell.jpg" /> Shell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success" className="p-1 ml-2" onClick={() => UpgradeRelic("adc-1")}><ImArrowUp className="mb-1 fs" /></Button>
            </div>
            <div className="d-flex justify-content-center">
              <Dropdown as={ButtonGroup}>
                <Button onClick={() => console.log("adc-2")}>{adcRelic2}</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#adc2-beads" onSelect={ChangeRelic}><img className="relic-icon" alt="Beads" src="https://web2.hirez.com/smite/item-icons/purification-beads.jpg" /> Beads</Dropdown.Item>
                  <Dropdown.Item href="#adc2-aegis" onSelect={ChangeRelic}><img className="relic-icon" alt="Aegis" src="https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg" /> Aegis</Dropdown.Item>
                  <Dropdown.Item href="#adc2-blink" onSelect={ChangeRelic}><img className="relic-icon" alt="Blink" src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg" /> Blink</Dropdown.Item>
                  <Dropdown.Item href="#adc2-shell" onSelect={ChangeRelic}><img className="relic-icon" alt="Shell" src="https://web2.hirez.com/smite/item-icons/magic-shell.jpg" /> Shell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success" className="p-1 ml-2" onClick={() => UpgradeRelic("adc-2")}><ImArrowUp className="mb-1 fs" /></Button>
            </div>
          </div>
          <div className="col-sm">
            <h1>Support</h1>
            <div className="d-flex justify-content-center mb-4">
              <Dropdown as={ButtonGroup}>
                <Button onClick={() => console.log("supp-1")}>{suppRelic1}</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#supp1-beads" onSelect={ChangeRelic}><img className="relic-icon" alt="Beads" src="https://web2.hirez.com/smite/item-icons/purification-beads.jpg" /> Beads</Dropdown.Item>
                  <Dropdown.Item href="#supp1-aegis" onSelect={ChangeRelic}><img className="relic-icon" alt="Aegis" src="https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg" /> Aegis</Dropdown.Item>
                  <Dropdown.Item href="#supp1-blink" onSelect={ChangeRelic}><img className="relic-icon" alt="Blink" src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg" /> Blink</Dropdown.Item>
                  <Dropdown.Item href="#supp1-shell" onSelect={ChangeRelic}><img className="relic-icon" alt="Shell" src="https://web2.hirez.com/smite/item-icons/magic-shell.jpg" /> Shell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success" className="p-1 ml-2" onClick={() => UpgradeRelic("supp-1")}><ImArrowUp className="mb-1 fs" /></Button>
            </div>
            <div className="d-flex justify-content-center">
              <Dropdown as={ButtonGroup}>
                <Button onClick={() => console.log("supp-2")}>{suppRelic2}</Button>
                <Dropdown.Toggle split id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#supp2-beads" onSelect={ChangeRelic}><img className="relic-icon" alt="Beads" src="https://web2.hirez.com/smite/item-icons/purification-beads.jpg" /> Beads</Dropdown.Item>
                  <Dropdown.Item href="#supp2-aegis" onSelect={ChangeRelic}><img className="relic-icon" alt="Aegis" src="https://web2.hirez.com/smite/item-icons/aegis-amulet.jpg" /> Aegis</Dropdown.Item>
                  <Dropdown.Item href="#supp2-blink" onSelect={ChangeRelic}><img className="relic-icon" alt="Blink" src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg" /> Blink</Dropdown.Item>
                  <Dropdown.Item href="#supp2-shell" onSelect={ChangeRelic}><img className="relic-icon" alt="Shell" src="https://web2.hirez.com/smite/item-icons/magic-shell.jpg" /> Shell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success" className="p-1 ml-2" onClick={() => UpgradeRelic("supp-2")}><ImArrowUp className="mb-1 fs" /></Button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
