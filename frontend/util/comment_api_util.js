export const fetchComments = (videoId) => {
    return (
        $.ajax({
            method: "GET",
            url: `api/videos/${videoId}/comments`
        })
    );
};

export const createComment = (videoId, comment) => {
    return (
        $.ajax({
            method: "POST",
            url: `api/videos/${videoId}/comments`,
            data: { comment }
        })
    );
};

export const deleteComment = (commentId) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `api/comments/${commentId}`
        })
    );
};