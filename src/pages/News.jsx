import React from 'react'

const News = () => {
  return (
    <div id='news'>
        <div className="container2">
            <div className="news-header mt-3 d-flex align-items-center justify-content-between">
                <p className="badge bg-black">ALL NEWS</p>
                <p className="fw-bold">CATEGORIES</p>
            </div>
           
            <div class="main-news py-5 bg-light">
                <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="news-card">
                            <div className="card-image">
                                <img src="../Images/trial.jpg" alt="" />
                            </div>

                            <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small class="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default News