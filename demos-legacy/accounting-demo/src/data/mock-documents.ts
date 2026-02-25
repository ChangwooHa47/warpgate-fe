import type { MockDocument } from "@/types";

export const mockDocuments: MockDocument[] = [
  {
    id: "1",
    name: "2024_1분기_매출자료.xlsx",
    type: "매출자료",
    submittedDate: "2024-03-01",
    status: "처리완료",
    fileSize: "2.4 MB",
  },
  {
    id: "2",
    name: "2024_매입세금계산서.pdf",
    type: "매입자료",
    submittedDate: "2024-03-05",
    status: "검토중",
    fileSize: "1.8 MB",
  },
  {
    id: "3",
    name: "2024_상반기_급여대장.xlsx",
    type: "급여대장",
    submittedDate: "2024-07-10",
    status: "접수완료",
    fileSize: "956 KB",
  },
  {
    id: "4",
    name: "사업자등록증_한빛테크.pdf",
    type: "사업자등록증",
    submittedDate: "2024-01-15",
    status: "처리완료",
    fileSize: "420 KB",
  },
  {
    id: "5",
    name: "2024_1분기_통장거래내역.csv",
    type: "통장거래내역",
    submittedDate: "2024-04-02",
    status: "처리완료",
    fileSize: "3.1 MB",
  },
  {
    id: "6",
    name: "2024_2분기_매출자료.xlsx",
    type: "매출자료",
    submittedDate: "2024-07-15",
    status: "검토중",
    fileSize: "2.7 MB",
  },
];
