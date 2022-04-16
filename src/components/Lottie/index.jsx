import React, { Component } from 'react';
import lottie from 'lottie-web';
class Lottie extends Component {
    componentDidMount() {
        this.animation = lottie.loadAnimation({
            container: document.getElementById("lottie"), // the dom element
            loop: true,
            autoplay: false,
            path: "https://assets5.lottiefiles.com/packages/lf20_QPewua.json"
          });
          this.animation.addEventListener("DOMLoaded", () => {
            this.animation.playSegments([180, 206], true);
          });
    }

    playAnimation(animation, segements) {
        return new Promise(resolve => {
          animation.playSegments(segements, true);
      
          const removeListener = animation.addEventListener('complete', () => {
            resolve();
            removeListener();
          });
        });
    }

    async playRoll(animation, isPending) {
        await this.playAnimation(animation, [0, 25]);
        while (isPending()) {
          await this.playAnimation(animation, [26, 35]);
        }
    }

    handleClick = async () => {
        this.number = null;
        // 并发 ajax 与掷骰子动画
        await Promise.all([
          new Promise((res) => {
            setTimeout(() => {
                res({number: 3});
            }, 1000)
          }).then(data => {
              return (this.number = data.number)
            }),
          this.playRoll(this.animation, () => !this.number)
        ]);
        debugger
        // 两者都完成后，播放筛子点数动画
        const segementStart = 36 + (this.number - 1) * 4; // 根据点数换算起始帧
        this.playAnimation(this.animation, [segementStart, segementStart + 4]);
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
                <div id="lottie"></div>
            </div>
        );
    }
}

export default Lottie;
