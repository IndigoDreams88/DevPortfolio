const data = [
  {
    img:
      "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/79670834_10157639724208467_115222693967560704_n.jpg?_nc_cat=101&_nc_sid=e007fa&_nc_oc=AQmNnN_MkzGxT-vR90TWwltcPRGfXY7R1OiV0zOxxQoNTeVTh3U0P7WvUVJA1WVpIIU&_nc_ht=scontent-lhr8-1.xx&oh=367439b2c8a7afa4f6b0412e0681735d&oe=5EF63F5C",
    text: "Ahimsa coloured line art",
    id: 0
  },
  {
    img:
      "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/79537502_10157639724228467_4952633875437191168_n.jpg?_nc_cat=108&_nc_sid=e007fa&_nc_oc=AQnSPNYGRrgMXs758kUmwq9PQ3qSkk_RRBh86DUdELNE9kBEJYAS8SH7xYa9Z3TBrlM&_nc_ht=scontent-lht6-1.xx&oh=7c9abc486a8939c1e8a41e2b58016486&oe=5EF89CE3",
    text: "Ahimsa line art sketch",
    id: 1
  },
  {
    img:
      "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/79534152_10157639722878467_8464656241426169856_n.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_oc=AQmEliXtt8MJxeZ3XXgoGDdbLGfQl3y5SgW1b-Stbe8MnaAMJleF26fx-b3NTxxRJiY&_nc_ht=scontent-lht6-1.xx&oh=29bf71bf99473c85e0c7587d1022e76d&oe=5EB98DC2",
    text: "Pig street chalking",
    id: 2
  },
  {
    img:
      "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/80250525_10157639724173467_5365847421945380864_n.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_oc=AQkAo-_W8vBYwBd_GouDMCs_H-beGV0PU_ORy-mgG9y7XqWPRbzJP4jUHw_FJz176AU&_nc_ht=scontent-lht6-1.xx&oh=67634916ef0e467f1b6c0355f6744925&oe=5EFABA34",
    text: "Fox street chalking",
    id: 3
  },
  {
    img:
      "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/80636909_10157652550273467_7981150074740670464_n.jpg?_nc_cat=111&_nc_sid=0be424&_nc_oc=AQna-1jt3sYbmbnkLLgdKn4tarVMZQkRzY8BNfD3L3mcKBeFXZG3x7rdheojtP5m_P4&_nc_ht=scontent-lhr8-1.xx&oh=2f3a0c1b794edcef343cb705e8ba66f8&oe=5EE96543",
    text: "Robin coloured pencil drawing",
    id: 4
  },
  {
    img:
      "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/81201498_10157652550283467_3495392716475334656_n.jpg?_nc_cat=102&_nc_sid=0be424&_nc_oc=AQlPZvTZPElr-lYvcXzW1DqJOSDbara45njrHMnbObl0JVxbW26hFjXgvCJeJQDSUqw&_nc_ht=scontent-lhr8-1.xx&oh=f2f232d4a1e48f5cf9680b26c833a177&oe=5EEAFB43",
    text: "Horse pen and coloured pencil line art",
    id: 5
  },
  {
    img:
      "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/80265599_10157652550508467_863896589570146304_n.jpg?_nc_cat=100&_nc_sid=0be424&_nc_oc=AQmow-nzljEAS8xhX2Wt334_Id0ZBTHpLcqfuVhCLU5T18z6LzERf6dNktycyUPQCEs&_nc_ht=scontent-lht6-1.xx&oh=a6b741228acf319721e72af7a17e8c91&oe=5EEA7ABA",
    text: "Lara Croft pen and coloured pencil line art",
    id: 6
  },
  {
    img:
      "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/79964002_10157652550448467_3496282599339327488_n.jpg?_nc_cat=103&_nc_sid=0be424&_nc_oc=AQnT_Pmr5489v_8V2hLYOHHsgJdKFOoewpN5zej9vLgXU5oaTNbE5gPA95z2kN5H24U&_nc_ht=scontent-lht6-1.xx&oh=3d95af918d0472f427345eb979a8a0c8&oe=5EBCBE4A",
    text: "Horse head Fimo clay sculpture",
    id: 7
  },
  {
    img:
      "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/79718561_10157639724443467_8276642166848094208_n.jpg?_nc_cat=108&_nc_sid=e007fa&_nc_oc=AQmnGEG2wJFr5HQkfjnA_ikwkpsDt2p1BQD_-370qqrvEd4WxjR0WRPyZIhLsPTTXpo&_nc_ht=scontent-lht6-1.xx&oh=a50c98cc461d85409d72db6e6941dd4f&oe=5EFE8830",
    text: "Fimo clay Guinea Pig trinket box",
    id: 8
  },
  {
    img:
      "https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/80652155_10157652550463467_3651311535537520640_n.jpg?_nc_cat=101&_nc_sid=0be424&_nc_oc=AQlXFaMwwIhRRhjAoSxeb5B421DDBflfAqzg5crso3W9zx2yH4CUC01vnKuTu4d1JkQ&_nc_ht=scontent-lhr8-1.xx&oh=94ae59305f04d5b3e92ce9bac7a73fc3&oe=5E9CF9F0",
    text: "Turtle Fimo clay sculpture",
    id: 9
  }
];

module.exports = data;
