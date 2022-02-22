import React from 'react';

const Work = {
    // 有1万个任务
    unit: 10000,
    // 处理每个任务
    onOneUnit: function() {
        for (var i = 0; i <= 500000; i++) {}
    },
    // 同步处理: 一次处理完所有任务
    onSyncUnit: function () {
        let _u = 0;
        function cb(deadline) {
            while (_u < Work.unit && deadline.timeRemaining() > 1) {
                Work.onOneUnit();
                _u++;
            }
            if (_u >= Work.unit) {
                console.log('done');
                return;
            }
            window.requestIdleCallback(cb);
        }
        window.requestIdleCallback(cb);
     }
  }

export default function RequestIdleCallback() {
    return (
        <div>
            <div className="btn" onClick={Work.onSyncUnit}>click</div>
            <div className="circle"></div>
        </div>
    )
}