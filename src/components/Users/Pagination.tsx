import React from 'react';
import classes from "./Pagination.module.scss";

type PropsType = {
    totalItems: number
    itemsOnPage: number
    currentPage: number
    changePageNumber: (page: number) => void
}

const Pagination: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalItems / props.itemsOnPage);
    let firstPage = props.currentPage - 2;
    let lastPage = props.currentPage + 2;
    let pages = [];

    if (firstPage <= 0) firstPage = 1
    if (lastPage >= pagesCount) lastPage = pagesCount

    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i)
    }

    const clickPrevButton = () => {
        if (props.currentPage>1)  props.changePageNumber(props.currentPage - 1)
    }

    const clickNextButton = () => {
        if (props.currentPage<pagesCount)  props.changePageNumber(props.currentPage + 1)
    }

    return (
        <div className={classes.pagination}>
            <button className={classes.pagination__btn}
                    disabled={props.currentPage===1}
                    onClick={clickPrevButton}>«</button>

            <div className={classes.pagination__pages}>
                {props.currentPage > 3 && <>
                <button className={`${classes.pagination__btn} ${1 === props.currentPage ? classes.pagination__btn_active : ""}`}
                     onClick={() => props.changePageNumber(1)}>{1}</button>
                    <div className={classes.pagination__space}>...</div>
                </>
                }
                {pages.map(pageN => <button
                    className={`${classes.pagination__btn} ${pageN === props.currentPage ? classes.pagination__btn_active : ""}`}
                    onClick={() => props.changePageNumber(pageN)}>{pageN}</button>)}
                {props.currentPage < pagesCount - 4 && <>
                    <div className={classes.pagination__space}>...</div>
                    <button className={`${classes.pagination__btn} ${pagesCount === props.currentPage ? classes.pagination__btn_active : ""}`}
                    onClick={() => props.changePageNumber(pagesCount)}>{pagesCount}</button>
                </>}
            </div>

            <button className={classes.pagination__btn}
                    disabled={props.currentPage===pagesCount}
                    onClick={clickNextButton}>»</button>
        </div>
    );
};

export default Pagination;
