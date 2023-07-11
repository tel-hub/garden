import React from "react";
import cn from "classnames";
import s from "./index.module.scss";
import {ReactComponent as InstagramIcon} from "../../icons/icons8-instagram.svg";
import {ReactComponent as WhatsappIcon} from "../../icons/icons8-whatsapp.svg";
import TelranMap from "../TelranMap";

export default function Footer(props) {

  return (
    <footer className={cn(s.footer_wrapper)}>
      <div className="container">
        <div className={cn(s.footer)}>
          <div className={cn(s.footer_contact)}>
            <div className={cn(s.footer_title)}>
              Contact
            </div>
            <div className={cn(s.footer_tel)}>
              <a href="tel:+499999999999">+49 999 999 99 99</a>
            </div>

            <div className={cn(s.footer_soc)}>
              <a href="#">
                <InstagramIcon></InstagramIcon>
                <span>instagram</span>
              </a>
              <a href="#">
                <WhatsappIcon></WhatsappIcon>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <div className={cn(s.footer_address)}>
            <div className={cn(s.footer_title)}>
              Address
            </div>
            <div className={cn(s.footer_location)}>
              <a target="_blank" href="https://www.google.com/search?q=telranDE"
              >Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
            </div>

            <dl className={cn(s.footer_time)}>
              <dt>Working Hours:</dt>
              <dd>24 hours a day</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className={cn(s.footer_map)}>
        <TelranMap></TelranMap>
      </div>
    </footer>
  );
}
