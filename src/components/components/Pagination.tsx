import React from "react";
import s from './Pagination.module.css'

type PaginationProps = {
    onPageChanged: (page: number) => void
    currentPage: number
    pageSize: number
    totalCount: number

}

const Pagination = (props: PaginationProps) => {

    let start = props.currentPage - 3
    let end = props.currentPage + 3
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = start; i <= end; i++) {
        pages.push(i)
    }

    const changedPage = (currentPage: number) => {
        return (currentPage > 0 && currentPage <= pagesCount) ? currentPage : ''
    }
    const onClickNextPage = () => {
        props.onPageChanged(props.currentPage + 1)
    }
    const onClickPrevPage = () => {
        props.onPageChanged(props.currentPage - 1)
    }
    const buttonStartPage = () => {
        props.onPageChanged(1)
    }
    const buttonLastPage = () => {
        props.onPageChanged(pagesCount)
    }


    return (
        <div className={s.pagination}>
            {props.currentPage !== 1
                ? <span> <button onClick={onClickPrevPage}>-</button>
                        <span onClick={buttonStartPage}> {1}... </span> </span>
                : ''}

            {pages.map(p => {
                return <span className={s.pages}>
                        <span className={props.currentPage === p ? s.currentPage : ''} onClick={() => {
                            props.onPageChanged(p)
                        }}>
                            {changedPage(p)}
                        </span>
                    </span>
            })}
            {props.currentPage < pagesCount
                ? <span>
                        <span onClick={buttonLastPage}> ...{pagesCount} </span>
                        <button onClick={onClickNextPage}>+</button>
                      </span>
                : ''
            }


        </div>
    )
}

export default Pagination