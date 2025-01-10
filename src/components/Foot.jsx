// import React from 'react'
// import '../Css/Foot.css'

// const Foot = () => {
//   return (
//     <>
//     <div class="footter">
//     <div class="footer1">
//       <h2 class="ft">WELL HALL</h2>
//       <div id="iconf">
//         <a href=""><i class="fa-brands fa-whatsapp"></i></a>
//         <a href=""><i class="fa-brands fa-instagram"></i></a>
//         <a href=""><i class="fa-brands fa-x-twitter"></i></a>
//       </div>
//     </div>
//     <div class="gridf">
//       <div class="gridf1">
//         <ul type="none">
         
//             <li class="list"><a class="item" href="">customer care</a></li>
//             <li class="list"><a class="item" href="">food</a></li>
//             <li class="list"><a class="item" href="">activity</a></li>
//             <li class="list"><a class="item" href="">Cooper</a></li>

//         </ul>

//       </div>
//       <div class="gridf1">
//         <ul type="none">
          
//             <li class="list"><a class="item" href="">Dubai</a></li>
//             <li class="list"><a class="item" href="">Iseland</a></li>
//             <li class="list"><a class="item" href="">Germany</a></li>
//             <li class="list"><a class="item" href="">America</a></li>

//         </ul>

//       </div>
//       <div class="gridf1">
//         <ul type="none">
          
//             <li class="list"><a class="item" href="">Travel</a></li>
//             <li class="list"><a class="item" href="">luxury</a></li>
//             <li class="list"><a class="item" href="">middle range</a></li>
//             <li class="list"><a class="item" href="">sweet room</a></li>

//         </ul>
//       </div>

//     </div>
//   </div>
//     </>
//   )
// }

// export default Foot


import React from 'react';
import '../Css/Foot.css';

const Foot = () => {
  return (
    <div className="footter">
      <div className="footer1">
        <h2 className="ft">WELL HALL</h2>
        <div id="iconf">
          <a href=""><i className="fa-brands fa-whatsapp"></i></a>
          <a href=""><i className="fa-brands fa-instagram"></i></a>
          <a href=""><i className="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
      <div className="gridf">
        <div className="gridf1">
          <ul className="list">
            <li><a className="item" href="">Customer Care</a></li>
            <li><a className="item" href="">Food</a></li>
            <li><a className="item" href="">Activity</a></li>
            <li><a className="item" href="">Cooper</a></li>
          </ul>
        </div>
        <div className="gridf1">
          <ul className="list">
            <li><a className="item" href="">Dubai</a></li>
            <li><a className="item" href="">Iceland</a></li>
            <li><a className="item" href="">Germany</a></li>
            <li><a className="item" href="">America</a></li>
          </ul>
        </div>
        <div className="gridf1">
          <ul className="list">
            <li><a className="item" href="">Travel</a></li>
            <li><a className="item" href="">Luxury</a></li>
            <li><a className="item" href="">Middle Range</a></li>
            <li><a className="item" href="">Sweet Room</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Foot;
