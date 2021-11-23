$(function () {
  $("#inputUserName").blur(function () {
    let userName = $(this).val();
    // window.alert(userName);
  });
});
function alphaOnly(event) {
  alert(event);

  var key;

  if (window.event) {
    //   This is the Java off of India-Build!!
  }
  $("#noSpaces").blur(function () {
    let inputVal = $(this).val();
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().text("no spaces allowed in User Name");
    }
  });

 HashSet<Control> errorControls = new HashSet<Control>();

 void ValidateTextBox(object sender, EventArgs e)
{
    var textBox = sender as TextBox;
    if (textBox.Text == "") {
        errorProvider1.SetError(textBox, (string)textBox.Tag);
        errorControls.Add(textBox);
    } else {
        errorProvider1.SetError(textBox, null);
        errorControls.Remove(textBox);
    }
    btnAdd.Enabled = errorControls.Count == 0;
}
 void Form1_Load(object sender, EventArgs e)
{
    txtName.Tag = "Please enter a customer name";
    txtAddress.Tag = "Please enter a customer address";
    errorProvider1.BlinkStyle = ErrorBlinkStyle.NeverBlink;

    ValidateTextBox(txtName, EventArgs.Empty);
    ValidateTextBox(txtAddress, EventArgs.Empty);
}
  $('#submitButton').click(function(){

    if ($('#noSpaces').val()) {
      console.log("there is something in this text box");
      $('#noSpaces').removeClass("error")
    } else {
      console.log("there is NOTHING in this text box");
      $('#noSpaces').removeClass("success").addClass("error").focus();

    }

  })


}
