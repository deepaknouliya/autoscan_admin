import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { Spinner } from "reactstrap";

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size}
  </span>
);

const NoDataIndication = () => (
  <div className="spinner">
    <div className="rect1" />
    <div className="rect2" />
    <div className="rect3" />
    <div className="rect4" />
    <div className="rect5" />
  </div>
);
const emptyDataMessage = () => { return 'No Data Found';}
const RemotePagination = ({
  data,
  columns,
  page,
  sizePerPage,
  onTableChange,
  totalSize,
  rowClasses,
}) => (
  <div>
    <PaginationProvider
      pagination={paginationFactory({
        // custom: true,
        page,
        sizePerPage,
        totalSize,
        alwaysShowAllBtns: true, // Always show next and previous button
        withFirstAndLast: true, // Hide the going to First and Last page button
        hideSizePerPage: true, // Hide the sizePerPage dropdown always
        hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: false,
        prePageText: false,
        nextPageText: false,
        lastPageText: false,
        nextPageTitle: "First page",
        prePageTitle: "Pre page",
        firstPageTitle: "Next page",
        lastPageTitle: "Last page",
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: false,
      })}
    >
      {({ paginationTableProps }) => (
        <div className="table-record-data tabel-application">
          {data?.length > 0 ? (
            <BootstrapTable
              remote
              keyField="id"
              id="uios"
              data={data}
              columns={columns}
              onTableChange={onTableChange}
              noDataIndication={() => <NoDataIndication />}
              rowClasses={rowClasses}
              {...paginationTableProps}
            />
          ) : (
            <BootstrapTable
              remote
              keyField="id"
              data={[]}
              id="uios"
              columns={columns}
              onTableChange={onTableChange}
              noDataIndication={emptyDataMessage}
              rowClasses={rowClasses}
              {...paginationTableProps}
            />
          )}
        </div>
      )}
    </PaginationProvider>
  </div>
);

export default RemotePagination;
