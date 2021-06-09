import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ReadRoulette = () => {
   const { roulette_id } = useParams();
   const [pageList, setPageList] = useState([]);
   const isList = pageList.length > 0;
   console.log(roulette_id);

   useEffect(() => {
      axios
         .get(`/api/read_roulette/${roulette_id}`)
         .then((res) => {
            console.log(res.data);
            setPageList(res.data);
         })
         .catch((err) => console.log(err));
   }, [roulette_id]);

   return (
      <div>
         <div>
            <h1 className="title margin">Read Roulette</h1>
            <div className="basic center">
               <div className="margin prompt">
                  <div className="ptext">Prompt:</div>
                  <p className="pbody">
                     {isList ? pageList[0].prompt_body : ""}
                  </p>
                  <div className="line" />
               </div>
               {pageList.map((page) => {
                  return (
                     <div key={page.submit_id}>
                        <div className="page-num">
                           <div className="sm-text">
                              page {page.submit_page}
                           </div>
                        </div>
                        <div
                           style={{ whiteSpace: "pre-line" }}
                           className="margin page"
                        >
                           {page.submit_body}
                           <div className="line" />
                        </div>
                     </div>
                  );
               })}
               <p className="margin sm-text">
                  End of Roulette, Check back later for more
               </p>
            </div>
         </div>
      </div>
   );
};

export default ReadRoulette;
