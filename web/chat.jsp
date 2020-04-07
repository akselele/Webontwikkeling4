<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<jsp:include page="head.jsp">
    <jsp:param name="title" value="Chat" />
</jsp:include>
<script type="text/javascript" src="js/chat.js"></script>
<body id="body">
<jsp:include page="header.jsp">
    <jsp:param name="title" value="Chat" />
</jsp:include>
<main>
    <h4>Status: </h4>
    <div id="status">
    <p id="pStatus">${user.getStatus()}</p>
    </div>

<%--    <form method="post" action="Controller?action=ChangeStatus">--%>
        <p>
            <label for="input">Change status</label>
            <input list="status" id="input">
            <datalist id="statuslist">
                <option value="Online">
                <option value="Offline">
                <option value="Away">
            </datalist>
            </input>

        </p>
        <p>
            <input id="statusbutton" type="button" value="Update Status" onclick="updateStatus();">

        </p>
<%--    </form>--%>


    <table id="friends">
        <tr>
            <td>Name</td>
            <td>Status</td>
        </tr>
    </table>

    <h4>Add friend (e-mail)</h4>
    <p><input type="text" id="email"><input type="button" value="Add friend" onclick="addFriend();"></p>
</main>

<jsp:include page="footer.jsp">
    <jsp:param name="title" value="Home" />
</jsp:include>
</body>
</html>