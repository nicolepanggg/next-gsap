"use client"
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(()=>{
    const ScrollTriggerSetting ={
      trigger:".main",
      start:"top 25%",
      toggleActions:"Play reverse play reverse"
    }

    const leftXValues = [-800, -900, -400];
    const RightXValues = [800, 900, 400];
    const leftRotationValue = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues =[100, -150, -400];

    gsap.utils.toArray(".row").forEach((row,index) =>{
      const cardLeft = row.querySelector(".card-left");
      const cardRight = row.querySelector(".card-right");

      gsap.to(cardLeft,{
        x:leftXValues[index],
        scrollTrigger:{
          trigger: ".main",
          start:"top center",
          scrub: true,
          onUpdate: (self) =>{
            const progress = self.progress;
            
            cardLeft.style.transform = `translateX(${
              progress * leftXValues[index]
            }px translateY${progress * yValues[index]}px rotate(${
              progress * leftRotationValue[index]
            }deg))`;
          }
        }
      });

      gsap.to(cardRight,{
        x:RightXValues[index],
        scrollTrigger:{
          trigger: ".main",
          start:"top center",
          scrub: true,
          onUpdate: (self) =>{
            const progress = self.progress;
            
             cardRight.style.transform = `translateX(${
              progress * RightXValues[index]
            }px translateY${progress * yValues[index]}px rotate(${
              progress * rightRotationValues[index]
            }deg))`;
          }
        }
      });

    })

    gsap.to(".logo",{
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger:ScrollTriggerSetting,
    });

    gsap.to(".line p",{
      y:0,
      stagger:0.1,
      duration:0.5,
      ease: "power1.out",
      scrollTrigger:ScrollTriggerSetting,
    });

    gsap.to("button",{
      y:0,
      opacity: 1,
      delay:0.25,
      duration:0.5,
      ease: "power1.out",
      scrollTrigger:ScrollTriggerSetting,
    });

    return ()=>{
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }

  },[]);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img src={`/img-${2 * i - 1}.jpg`} alt="" />
          </div>
          <div className="card card-right">
            <img src={`/img-${2 * i}.jpg`} alt="" />
          </div>
        </div>
      );
    }
    return rows;
  }
  
  return (
    <div className="tpl-scroll-trigger">
      <ReactLenis root>
        <section className="hero">
          <div className="img">
            <img src="/img-1.jpg" alt="" />
          </div>
        </section>
        <section className="main">
          <div className="main-content">
            <div className="logo">
              <img src="/img-2.jpg" alt="" />
            </div>
            <div className="copy">
              <div className="line">
                <p>Hi this is testing</p>
              </div>
            </div>

            <div className="btn">
              <button>Get PRO</button>
            </div>
          </div>
          {generateRows()}
        </section>

        <section className="footer">
          <Link href={"#"}>Link is description</Link>
        </section>
        <section className="hero">
          <div className="img">
            <img src="/img-1.jpg" alt="" />
          </div>
        </section>
      </ReactLenis>
    </div>
  );
}
