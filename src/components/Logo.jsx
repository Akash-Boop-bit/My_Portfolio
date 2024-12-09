import React, { useRef } from "react";
import classes from "./css/Logo.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Logo = () => {
  const lineRef = useRef(null);
  const lineRef2 = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
    });
    gsap.set(lineRef.current, {
      strokeDasharray: lineRef.current.getTotalLength(),
      strokeDashoffset: lineRef.current.getTotalLength(),
      opacity: 0,
    });
    gsap.set(lineRef2.current, {
      strokeDasharray: lineRef2.current.getTotalLength(),
      strokeDashoffset: lineRef2.current.getTotalLength(),
      opacity: 0,
    });

    tl.to("#akash", {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power4.inOut",
      opacity: 1,
    });
    tl.to("#malik", {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power4.inOut",
      opacity: 1,
    });

    tl.to("#akash", {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stroke: "white",
      strokeWidth: 2,

      fill: "blue",
      onUpdate: () => {
        lineRef.current.style.filter = "url(#glow-shadow)";
      },
    });
    tl.to(
      "#malik",
      {
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stroke: "white",
        strokeWidth: 5,
        fill: "yellow",
        onUpdate: () => {
          lineRef2.current.style.filter = "url(#glow-shadow)";
        },
      },
      "<"
    );
  });

  return (
    <div className={classes.main}>
      <svg
        width="877"
        height="103"
        viewBox="0 0 877 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow-shadow" x="-50%" y="-50%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="10" result="blurred" />{" "}
            {/* Adjust the shadow blur */}
            <feFlood floodColor="#00ff00" result="glowColor" />{" "}
            {/* Glow color */}
            <feComposite in="glowColor" in2="blurred" operator="in" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" />{" "}
              {/* Keeps the original path visible */}
            </feMerge>
          </filter>
        </defs>

        <path
          ref={lineRef}
          id="akash"
          d="M21.6364 101H0.545455L32.6818 7.90909H58.0455L90.1364 101H69.0455L45.7273 29.1818H45L21.6364 101ZM20.3182 64.4091H70.1364V79.7727H20.3182V64.4091ZM101.341 101V7.90909H121.023V48.9545H122.25L155.75 7.90909H179.341L144.795 49.5909L179.75 101H156.205L130.705 62.7273L121.023 74.5455V101H101.341ZM205.636 101H184.545L216.682 7.90909H242.045L274.136 101H253.045L229.727 29.1818H229L205.636 101ZM204.318 64.4091H254.136V79.7727H204.318V64.4091ZM333.716 34.6818C333.352 31.0151 331.792 28.1667 329.034 26.1364C326.277 24.1061 322.534 23.0909 317.807 23.0909C314.595 23.0909 311.883 23.5455 309.67 24.4545C307.458 25.3333 305.761 26.5606 304.58 28.1364C303.428 29.7121 302.852 31.5 302.852 33.5C302.792 35.1667 303.14 36.6212 303.898 37.8636C304.686 39.1061 305.761 40.1818 307.125 41.0909C308.489 41.9697 310.064 42.7424 311.852 43.4091C313.64 44.0455 315.549 44.5909 317.58 45.0455L325.943 47.0455C330.004 47.9545 333.731 49.1667 337.125 50.6818C340.519 52.197 343.458 54.0606 345.943 56.2727C348.428 58.4848 350.352 61.0909 351.716 64.0909C353.11 67.0909 353.822 70.5303 353.852 74.4091C353.822 80.1061 352.367 85.0455 349.489 89.2273C346.64 93.3788 342.519 96.6061 337.125 98.9091C331.761 101.182 325.292 102.318 317.716 102.318C310.201 102.318 303.655 101.167 298.08 98.8636C292.534 96.5606 288.201 93.1515 285.08 88.6364C281.989 84.0909 280.367 78.4697 280.216 71.7727H299.261C299.473 74.8939 300.367 77.5 301.943 79.5909C303.549 81.6515 305.686 83.2121 308.352 84.2727C311.049 85.303 314.095 85.8182 317.489 85.8182C320.822 85.8182 323.716 85.3333 326.17 84.3636C328.655 83.3939 330.58 82.0455 331.943 80.3182C333.307 78.5909 333.989 76.6061 333.989 74.3636C333.989 72.2727 333.367 70.5152 332.125 69.0909C330.913 67.6667 329.125 66.4545 326.761 65.4545C324.428 64.4545 321.564 63.5455 318.17 62.7273L308.034 60.1818C300.186 58.2727 293.989 55.2879 289.443 51.2273C284.898 47.1667 282.64 41.697 282.67 34.8182C282.64 29.1818 284.14 24.2576 287.17 20.0455C290.231 15.8333 294.428 12.5455 299.761 10.1818C305.095 7.81818 311.155 6.63636 317.943 6.63636C324.852 6.63636 330.883 7.81818 336.034 10.1818C341.216 12.5455 345.246 15.8333 348.125 20.0455C351.004 24.2576 352.489 29.1364 352.58 34.6818H333.716ZM367.091 101V7.90909H386.773V46.3182H426.727V7.90909H446.364V101H426.727V62.5455H386.773V101H367.091Z"
          fill="white"
        />
        <path
          ref={lineRef2}
          id="malik"
          d="M549.278 5.90909H573.551L599.188 68.4545H600.278L625.915 5.90909H650.188V99H631.097V38.4091H630.324L606.233 98.5455H593.233L569.142 38.1818H568.369V99H549.278V5.90909ZM685.949 100.318C681.494 100.318 677.525 99.5455 674.04 98C670.555 96.4242 667.797 94.1061 665.767 91.0455C663.767 87.9545 662.767 84.1061 662.767 79.5C662.767 75.6212 663.479 72.3636 664.903 69.7273C666.328 67.0909 668.267 64.9697 670.722 63.3636C673.176 61.7576 675.964 60.5455 679.085 59.7273C682.237 58.9091 685.54 58.3333 688.994 58C693.055 57.5758 696.328 57.1818 698.812 56.8182C701.297 56.4242 703.1 55.8485 704.222 55.0909C705.343 54.3333 705.903 53.2121 705.903 51.7273V51.4545C705.903 48.5758 704.994 46.3485 703.176 44.7727C701.388 43.197 698.843 42.4091 695.54 42.4091C692.055 42.4091 689.282 43.1818 687.222 44.7273C685.161 46.2424 683.797 48.1515 683.131 50.4545L665.222 49C666.131 44.7576 667.919 41.0909 670.585 38C673.252 34.8788 676.691 32.4848 680.903 30.8182C685.146 29.1212 690.055 28.2727 695.631 28.2727C699.509 28.2727 703.222 28.7273 706.767 29.6364C710.343 30.5455 713.509 31.9545 716.267 33.8636C719.055 35.7727 721.252 38.2273 722.858 41.2273C724.464 44.197 725.267 47.7576 725.267 51.9091V99H706.903V89.3182H706.358C705.237 91.5 703.737 93.4242 701.858 95.0909C699.979 96.7273 697.722 98.0152 695.085 98.9545C692.449 99.8636 689.403 100.318 685.949 100.318ZM691.494 86.9545C694.343 86.9545 696.858 86.3939 699.04 85.2727C701.222 84.1212 702.934 82.5758 704.176 80.6364C705.419 78.697 706.04 76.5 706.04 74.0455V66.6364C705.434 67.0303 704.6 67.3939 703.54 67.7273C702.509 68.0303 701.343 68.3182 700.04 68.5909C698.737 68.8333 697.434 69.0606 696.131 69.2727C694.828 69.4545 693.646 69.6212 692.585 69.7727C690.313 70.1061 688.328 70.6364 686.631 71.3636C684.934 72.0909 683.616 73.0758 682.676 74.3182C681.737 75.5303 681.267 77.0455 681.267 78.8636C681.267 81.5 682.222 83.5152 684.131 84.9091C686.07 86.2727 688.525 86.9545 691.494 86.9545ZM759.653 5.90909V99H740.29V5.90909H759.653ZM775.165 99V29.1818H794.528V99H775.165ZM784.892 20.1818C782.013 20.1818 779.544 19.2273 777.483 17.3182C775.453 15.3788 774.438 13.0606 774.438 10.3636C774.438 7.69697 775.453 5.40909 777.483 3.5C779.544 1.5606 782.013 0.590904 784.892 0.590904C787.771 0.590904 790.225 1.5606 792.256 3.5C794.316 5.40909 795.347 7.69697 795.347 10.3636C795.347 13.0606 794.316 15.3788 792.256 17.3182C790.225 19.2273 787.771 20.1818 784.892 20.1818ZM827.585 78.9091L827.631 55.6818H830.449L852.812 29.1818H875.04L844.994 64.2727H840.403L827.585 78.9091ZM810.04 99V5.90909H829.403V99H810.04ZM853.676 99L833.131 68.5909L846.04 54.9091L876.358 99H853.676Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Logo;