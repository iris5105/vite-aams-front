import axios from "axios";
import { copyObject } from "./ObjectUtils";

export function httpServiceGetData() {}

// HttpDataGridRetrieve
// HttpEditGridRetrieve
// HttpEditGridUpdate
// HttpEditGridInsert

export const httpDataTableRetrieve = (
  requestUrl,
  requestParams,
  setRows
) => {
  const service = axios.create({
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("authKey"),
    },
  });

  service.defaults.params = requestParams;
  service
    .get(requestUrl)
    .then((response) => {

      response.data.forEach((data, index) => {
        // 조회된 자료의 초기값 설정
        data.$rowNo = index + 1;
      });

      setRows(response.data);
    })
    .catch((e) => {
      alert("자료조회 오류발생: " + e);
    });
};

export const httpDataTableRetrievePage = (
  requestUrl,
  requestParams,
  setTotalCount,
  setRows
) => {
  const service = axios.create({
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("authKey"),
    },
  });

  service.defaults.params = requestParams;
  service
    .get(requestUrl)
    .then((response) => {
      // console.log(response);

      setTotalCount(response.data.totalElements);
      response.data.content.forEach((data, index) => {
        // 조회된 자료의 초기값 설정
        data.$rowNo = index + 1;
      });

      setRows(response.data.content);
    })
    .catch((e) => {
      alert("Total Count 조회오류 발생: " + e);
    });
};

export const httpServiceRetrieve = (
  requestUrl,
  requestParams,
  setRows
) => {
  // console.log("requestParams", requestParams);

  // get에서만 HttpService()를 사용할 경우 parameter가 넘어가지 않는다.
  // 원인은 못찾았음.
  const service = axios.create({
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("authKey"),
    },
  });
  service.defaults.params = requestParams;

  /**
   * interceptor 만들기
   */
  // service.interceptors.request.use(function (config) {
  //   console.log(config.params);
  //   return config;
  // });
  service
    .get(requestUrl)
    .then((response) => {
      // console.log("httpServiceRetrieve", response.data);

      response.data.forEach((data, index) => {
        // 조회된 자료의 초기값 설정
        data.$rowNo = index + 1;
        data.$isInsert = false;
        data.$isUpdate = false;
        data.$isDelete = false;
      });

      setRows(response.data);
      console.log(response.data);
    })
    .catch((e) => {
      alert("자료조회 오류발생: " + e);
    });
};

export const httpServiceInsertRow = (
  keyId,
  rows,
  setRows,
  setInitValue
) => {
  // 신규자료의 Seq ID와 초기값을 설정한다.
  const service = axios.create({
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("authKey"),
    },
  });
  service
    .get("/dual/seq")
    .then((response) => {
      const seqId = response.data;

      const newRow = {};
      newRow[keyId] = seqId;

      newRow.$rowNo = rows.length + 1;
      newRow.$isInsert = true;
      newRow.$isUpdate = false;
      newRow.$isDelete = false;
      // newRow.companyName = "신규회사 등록";
      if (setInitValue) {
        setInitValue(newRow); // 초기값 설정 함수 callback
      }

      setRows([...rows, newRow]);
    })
    .catch((e) => {
      alert("Seq 받아오기 오류 났음." + e);
    });
};

export const httpServiceUpdate = (
  keyId,
  updateUrl,
  rows,
  setRows
) => {
  let deleteData = rows.map((row) => {
    if (row.$isDelete) {
      // 오브젝트를 복사 후 elements($rowNo, $insert, $isDelete, $isUpdate)등을 삭제할 수 있다.
      // 그렇지 않으면 rows에서도 삭제되므로 조심...
      const deleteRow = copyObject(row);
      delete deleteRow["$rowNo"];
      delete deleteRow["$isInsert"];
      delete deleteRow["$isDelete"];
      delete deleteRow["$isUpdate"];
      return deleteRow;
    }
  });

  deleteData = deleteData.filter((row) => {
    if (typeof row !== "undefined") {
      // map으로 인핸 undefined로 생성된 배열요소를 삭제한다.
      return row;
    }
  });

  const updateData = rows.filter((row) => {
    if (row.$isUpdate) {
      const updateRow = row;
      delete updateRow["$rowNo"];
      delete updateRow["$isInsert"];
      delete updateRow["$isDelete"];
      delete updateRow["$isUpdate"];
      return updateRow;
    }
  });

  // updateData = updateData.filter((row) => {
  //   if (typeof row !== "undefined") {
  //     // map으로 인핸 undefined로 생성된 배열요소를 삭제한다.
  //     return row;
  //   }
  // });
  const service = axios.create({
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("authKey"),
    },
  });

  service
    .put(updateUrl, {
      deleteData, // delete data
      updateData, // insert & update data
    })
    .then((response) => {
      // 삭제된 자료를 dataGrid에서 삭제한다.
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].$isDelete) {
          rows.splice(i, 1);
          i--; // 삭제되면 length가 줄어든다. 삭제한 동일 index를 찾아야 한다.
        }
      }

      const getData = response.data;

      // 변경된 자료를 업데이트 한다.
      rows.forEach((row, rowIndex) => {
        const updatedRow = getData.find((e) => e[keyId] === row[keyId]);

        if (updatedRow) {
          updatedRow.$isInsert = false;
          updatedRow.$isUpdate = false;
          updatedRow.$isDelete = false;
          rows.splice(rowIndex, 1, updatedRow);
        }
      });

      // RowNo 번호 다시 부여
      rows.forEach((r, idx) => {
        r.$rowNo = idx + 1;
      });

      setRows([...rows]);
    })
    .catch((e) => {
      alert("자료저장 오류: " + e);
    });
};

export const HttpService = () => {
  const httpService = axios.create({
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("authKey"),
    },
  });

  return httpService;
};

// callback 함수를 아래와 같이 받아야 한다.
// 아무도 가르쳐 주지 않음. -> 많이 어려움... ㅋ
export const SetRowSeqId = (callback) => {
  // 넘어오는 값이 number임을 명시하였다.
  // Json 조회용으로 사용할 경우에는 어떻게 하지? 그냥 Any로 설정해야 할까?
  const service = axios.create({
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("authKey"),
    },
  });
  service
    .get("/dual/seq")
    .then((response) => {
      callback(response.data);
    })
    .catch((e) => {
      alert("get SEQ fail." + e);
    });
};

// export const httpService = axios.create({
//   /**
//     baseURL: "/",  <=  기본 주소는 package.josn 파일에
//     "proxy": "http://localhost:8088" 로 기술하였다.
//     proxy 설정이 안되어 있으면 네트웍에서 CORS 오류가 발생한다. !Important
//   */

//   baseURL: "/",
//   headers: {
//     // "Content-type": "application/json" ,
//     Accept: "application/json",
//     // Authorization: localStorage.getItem("authKey"),
//   },
// });

// export default HttpService;
